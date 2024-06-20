import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './entities'
import { DeepPartial, FindManyOptions, Repository } from 'typeorm'

@Injectable()
export class UserRepository {
	constructor(
		@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
	) {}

	public async getByTgId(tg_id: string) {
		return this.userRepository.findOne({
			where: {
				tg_id
			}
		})
	}

	public async getById(id: number) {
		return this.userRepository.findOne({
			where: {
				id
			}
		})
	}

	public async create(user: DeepPartial<UserEntity>) {
		const createdUser = this.userRepository.create({
			...user
		})

		return await this.userRepository.save(createdUser)
	}

	public async update(user: DeepPartial<UserEntity>) {
		return this.userRepository.save({ ...user })
	}

	public async getByLink(link: string) {
		return this.userRepository.findOne({
			where: {
				link
			}
		})
	}

	public async getAll(options?: FindManyOptions<UserEntity>) {
		return this.userRepository.find(options)
	}
}
