import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './entities'
import { DeepPartial, Repository } from 'typeorm'

@Injectable()
export class UserRepository {
	constructor(
		@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
	) {}

	public async getByTgId(tg_id: number) {
		return this.userRepository.findOne({
			where: {
				tg_id
			}
		})
	}

	public async create(user: DeepPartial<UserEntity>) {
		return this.userRepository.create({
			...user
		})
	}
}
