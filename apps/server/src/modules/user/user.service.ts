import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	public async getByTgId(id: string) {
		return this.userRepository.getByTgId(id)
	}

	public async registration(tg_id: string) {
		return this.userRepository.create({ tg_id })
	}

	public async updateLink(userId: string, link: string) {
		const user = await this.userRepository.getByTgId(userId)

		if (!user) {
			return null
		}

		return this.userRepository.update({ ...user, link })
	}
}
