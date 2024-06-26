import { InjectRepository } from '@nestjs/typeorm'
import { CardEntity, UserCardEntity } from './entities'
import { Repository } from 'typeorm'
import { UserAchievementEntity } from '../user/entities'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UserCardRepository {
	constructor(
		@InjectRepository(UserCardEntity)
		private readonly userCardRepository: Repository<UserCardEntity>
	) {}

	public async create(card: { card: CardEntity; achievement: UserAchievementEntity }) {
		const createdUserCard = this.userCardRepository.create(card)

		return this.userCardRepository.save(createdUserCard)
	}

	public async removeMany(cards: UserCardEntity[]) {
		return this.userCardRepository.remove(cards)
	}
}
