import { BadRequestException, Injectable } from '@nestjs/common'
import { UserAchievementRepository } from './user-achievement.repository'
import { UserCardEntity } from '../card/entities'
import { getEnumItemIndex } from '../game/utils'
import { ECardRarity } from '@/common/enums'
import { UserEntity } from './entities'

@Injectable()
export class UserAchievementService {
	constructor(private readonly userAchievementRepository: UserAchievementRepository) {}

	public async getByUserId(id: number) {
		return this.userAchievementRepository.getByUserId(id)
	}

	public async create(user: UserEntity) {
		return this.userAchievementRepository.create(user)
	}

	public async drop(userId: number, userCard: UserCardEntity, isUseTry: boolean) {
		const achievement = await this.getByUserId(userId)

		if (!achievement) {
			throw new BadRequestException('Ваш прогресс не найден. Обратитесь в поддержку!')
		}

		await this.userAchievementRepository.update({
			...achievement,
			lastTap: isUseTry ? achievement.lastTap : new Date().toISOString(),
			taps: achievement.taps + 1,
			points: achievement.points + 1,
			tries: isUseTry
				? achievement.tries
					? achievement.tries - 1
					: achievement.tries
				: achievement.tries,
			stage:
				getEnumItemIndex(ECardRarity, userCard.card.rarity) >
				getEnumItemIndex(ECardRarity, achievement.stage)
					? userCard.card.rarity
					: achievement.stage
		})
	}

	public async setStage(userId: number, rarity: ECardRarity) {
		const inventory = await this.getByUserId(userId)
		inventory.stage = rarity
		await this.userAchievementRepository.update(inventory)
	}
}
