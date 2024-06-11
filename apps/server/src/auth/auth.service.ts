import { UserService } from '@/modules/user/user.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService) {}

	public async login(id: number) {
		let user = await this.userService.getByTgId(id)

		if (!user) {
			user = await this.userService.registration(id)
		}
	}
}
