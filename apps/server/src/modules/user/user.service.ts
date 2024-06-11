import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	public async getByTgId(id: number) {
		return this.userRepository.getByTgId(id)
	}

	public async registration(id: number) {
		return this.userRepository.create({ tg_id: id })
	}
}
