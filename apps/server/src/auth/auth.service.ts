import { UserService } from '@/modules/user/user.service'
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { randomUUID } from 'crypto'
import { TokenService } from './token.service'
import { UserAchievementService } from '@/modules/game/user-achievement.service'
import { CacheService } from '@/core/cache/cache.service'
import { TUserOAuthDto, type TAuthDto } from './dto'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly configService: ConfigService,
		private readonly tokenService: TokenService,
		private readonly userAchievementService: UserAchievementService,
		private readonly cacheService: CacheService
	) {}

	public async registrationTg(tg_id: string) {
		let user = await this.userService.getByTgId(tg_id)

		if (!user) {
			user = await this.userService.create({ tg_id }).then(async res => {
				await this.userAchievementService.create(res)
				return res
			})
		}

		await this.cacheService.set(tg_id, String(user.id))

		return user
	}

	public async loginTg(userId: string) {
		const user = await this.userService.getByTgId(userId)

		if (!user) {
			throw new BadRequestException('Пользователь не найден. Начните чат с ботом заново!')
		}

		await this.userService.update({ ...user, link: randomUUID() })
	}

	public async getLink(userId: string, type: 'webapp' | 'app') {
		const user = await this.userService.getByTgId(userId)

		if (!user) {
			throw new BadRequestException('Пользователь не найден. Начните чат с ботом заново!')
		}

		return `${this.configService.get('VITE_SERVER_URL')}/api/auth/confirm/${user.link}?type=${type}`
	}

	public async createSession(link: string): Promise<null | string> {
		const user = await this.userService.getByLink(link)

		if (!user) {
			return null
		}

		const { refreshToken } = this.tokenService.generateTokens(user)

		await this.userService.update({ ...user, link: null })

		await this.tokenService.saveToDb(refreshToken, user)

		return refreshToken
	}

	public async refresh({
		refresh,
		userId,
		isOAuth
	}: {
		refresh?: string
		userId: number
		isOAuth?: boolean
	}) {
		if (isOAuth) {
			const tokenFromDb = await this.tokenService.findSessionByToken(refresh)

			if (!tokenFromDb) {
				return null
			}
		}

		const profile = await this.userService.getById(userId)

		if (!profile) {
			return null
		}

		const tokens = this.tokenService.generateTokens(profile)

		await this.tokenService.saveToDb(tokens.refreshToken, profile)

		return { tokens, profile }
	}

	public async logout(refresh: string) {
		await this.tokenService.removeSessionByToken(refresh)
	}

	public async validateUser(profile: TUserOAuthDto) {
		const user = await this.userService.getByEmail(profile.email)

		if (user) {
			return user
		}

		return this.userService.create(profile)
	}

	public async registration({ email, password }: TAuthDto) {
		const candidate = await this.userService.getByEmail(email)

		if (candidate) {
			throw new BadRequestException('Почта занята')
		}

		const hash = await bcrypt.hash(password, 7)

		const user = await this.userService.create({
			email,
			password: hash
		})

		const tokens = this.tokenService.generateTokens(user)

		await this.tokenService.saveToDb(tokens.refreshToken, user)

		return { tokens, user }
	}

	public async login({ password, email }: TAuthDto) {
		const profile = await this.userService.getByEmail(email)

		if (!profile) {
			throw new NotFoundException('Логин или пароль неверен!')
		}
	}
}
