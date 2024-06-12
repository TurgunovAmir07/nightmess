import { UserService } from '@/modules/user/user.service'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { randomUUID } from 'crypto'
import { TokenService } from './token.service'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly configService: ConfigService,
		private readonly tokenService: TokenService
	) {}

	public async login(userId: string) {
		let user = await this.userService.getByTgId(userId)

		if (!user) {
			user = await this.userService.registration(userId)
		}

		const link = randomUUID()

		await this.userService.updateLink(userId, link)

		return { link: `${this.configService.get('SERVER_URL')}/api/auth/${link}` }
	}

	public async createSession(link: string): Promise<null | string> {
		const user = await this.userService.getByLink(link)

		if (!user) {
			return null
		}

		const { refreshToken } = this.tokenService.generateTokens(user)

		await this.userService.updateLink(user.tg_id, null)

		await this.tokenService.safeToDb(refreshToken, user.id)

		return refreshToken
	}
}
