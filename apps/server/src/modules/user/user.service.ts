import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { DeepPartial, FindManyOptions } from 'typeorm'
import { UserEntity } from './entities'

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	public async getByTgId(id: string) {
		return this.userRepository.getByTgId(id)
	}

	public getByEmail(email: string) {
		return this.userRepository.getByEmail(email)
	}

	public async getAll(options?: FindManyOptions<UserEntity>) {
		return this.userRepository.getAll(options)
	}

	public async create(user: DeepPartial<UserEntity>) {
		return this.userRepository.create(user)
	}

	public async update(user: DeepPartial<UserEntity>) {
		return this.userRepository.update(user)
	}

	public async getByLink(link: string) {
		return this.userRepository.getByLink(link)
	}

	public async getById(id: number) {
		return this.userRepository.getById(id)
	}
}
