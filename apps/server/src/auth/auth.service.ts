import { UserService } from '@/modules/user/user.service'
import { BadRequestException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { randomUUID } from 'crypto'
import { TokenService } from './token.service'
import { UserAchievementService } from '@/modules/game/user-achievement.service'
import { CacheService } from '@/core/cache/cache.service'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly configService: ConfigService,
		private readonly tokenService: TokenService,
		private readonly userAchievementService: UserAchievementService,
		private readonly cacheService: CacheService
	) {}

	public async registration(tg_id: string) {
		let user = await this.userService.getByTgId(tg_id)

		if (!user) {
			user = await this.userService.create(tg_id).then(async res => {
				await this.userAchievementService.create(res)
				return res
			})
		}

		await this.cacheService.set(tg_id, String(user.id))

		return user
	}

	public async login(userId: string, type: 'webapp' | 'app') {
		const user = await this.userService.getByTgId(userId)

		if (!user) {
			throw new BadRequestException('Пользователь не найден. Начните чат с ботом заново!')
		}

		const link = randomUUID()

		return this.userService
			.updateLink(String(user.tg_id), link)
			.then(() => ({
				link: `${this.configService.get('VITE_SERVER_URL')}/api/auth/confirm/dc9a4d73-f17a-469d-a679-7f6541a31cd7?type=${type}`
			}))
			.catch(() => ({ link: null }))
	}

	public async createSession(link: string): Promise<null | string> {
		const user = await this.userService.getByLink(link)

		if (!user) {
			return null
		}

		const { refreshToken } = this.tokenService.generateTokens(user)

		await this.userService.updateLink(user.tg_id, null)

		await this.tokenService.saveToDb(refreshToken, user)

		return refreshToken
	}

	public async refresh(refresh: string, userId: number) {
		const tokenFromDb = await this.tokenService.findSessionByToken(refresh)
		const profile = await this.userService.getById(userId)

		if (!tokenFromDb || !profile) {
			return null
		}

		const tokens = this.tokenService.generateTokens(profile)

		await this.tokenService.saveToDb(tokens.refreshToken, profile)

		return { tokens, profile }
	}

	public async logout(refresh: string) {
		await this.tokenService.removeSessionByToken(refresh)
	}
}
