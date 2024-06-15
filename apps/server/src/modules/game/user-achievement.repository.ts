import { InjectRepository } from '@nestjs/typeorm'
import { UserAchievementEntity } from './entities'
import { Repository } from 'typeorm'
import { UserEntity } from '../user/entities'

export class UserAchievementRepository {
	constructor(
		@InjectRepository(UserAchievementEntity)
		private readonly userAchievementRepository: Repository<UserAchievementEntity>
	) {}

	public async getByUserId(user: number) {
		return this.userAchievementRepository.findOne({
			where: {
				user: {
					id: user
				}
			}
		})
	}

	public async update(achievement: UserAchievementEntity) {
		return this.userAchievementRepository.save(achievement)
	}

	public async create(user: UserEntity) {
		const createdAchievement = this.userAchievementRepository.create({
			user
		})

		return this.userAchievementRepository.save(createdAchievement)
	}
}
