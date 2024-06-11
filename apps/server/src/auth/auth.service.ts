import { UserService } from '@/modules/user/user.service'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { randomUUID } from 'crypto'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly configService: ConfigService
	) {}

	public async login(userId: string) {
		let user = await this.userService.getByTgId(userId)

		const link = randomUUID()

		if (!user) {
			user = await this.userService.registration(userId)
		}

		await this.userService.updateLink(userId, link)

		return { link: `${this.configService.get('CLIENT_URL')}/${link}` }
	}
}
