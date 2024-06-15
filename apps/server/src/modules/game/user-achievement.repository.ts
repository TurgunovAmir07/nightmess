import { InjectRepository } from '@nestjs/typeorm'
import { UserAchievementEntity } from './entities'
import { Repository } from 'typeorm'

export class UserAchievementRepository {
	constructor(
		@InjectRepository(UserAchievementEntity)
		private readonly userAchievementRepository: Repository<UserAchievementEntity>
	) {}

	public async getAchievementByUserId(user: number) {
		return this.userAchievementRepository.findOne({
			where: {
				user
			}
		})
	}
}
