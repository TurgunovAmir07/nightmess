import { Injectable } from '@nestjs/common'
import { UserAchievementEntity } from '../game/entities'
import { CardEntity } from './entities'
import { UserCardRepository } from './user-card.repository'

@Injectable()
export class UserCardService {
	constructor(private readonly userCardRepository: UserCardRepository) {}

	public async create(card: { card: CardEntity; achievement: UserAchievementEntity }) {
		return this.userCardRepository.create(card)
	}
}
