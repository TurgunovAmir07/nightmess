import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { FindManyOptions } from 'typeorm'
import { UserEntity } from './entities'

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	public async getByTgId(id: string) {
		return this.userRepository.getByTgId(id)
	}

	public async getAll(options?: FindManyOptions<UserEntity>) {
		return this.userRepository.getAll(options)
	}

	public async create(tg_id: string) {
		return this.userRepository.create({ tg_id })
	}

	public async updateLink(userTgId: string, link: string | null) {
		const user = await this.userRepository.getByTgId(userTgId)

		if (!user) {
			return null
		}

		return this.userRepository.update({ ...user, link })
	}

	public async getByLink(link: string) {
		return this.userRepository.getByLink(link)
	}

	public async getById(id: number) {
		return this.userRepository.getById(id)
	}
}
