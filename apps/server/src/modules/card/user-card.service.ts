import { Inject, Injectable, forwardRef } from '@nestjs/common'
import { UserAchievementEntity } from '../game/entities'
import { CardEntity, UserCardEntity } from './entities'
import { UserCardRepository } from './user-card.repository'
import { DatabaseService } from '@/core/database/database.service'
import { QueryRunner } from 'typeorm'
import { ECardColor, ECardRarity } from '@/common/enums'
import { UserAchievementService } from '../game/user-achievement.service'
import { CardService } from './card.service'

@Injectable()
export class UserCardService {
	constructor(
		private readonly userCardRepository: UserCardRepository,
		@Inject(forwardRef(() => CardService))
		private readonly cardService: CardService,
		private readonly databaseService: DatabaseService,
		private readonly userAchievementService: UserAchievementService
	) {}

	public async create(card: { card: CardEntity; achievement: UserAchievementEntity }) {
		return this.userCardRepository.create(card)
	}

	public async removeMany(cards: UserCardEntity[]) {
		return this.userCardRepository.removeMany(cards)
	}

	public async craft(
		userId: number,
		successArray: boolean[],
		rarity: ECardRarity,
		color: ECardColor
	) {
		return this.databaseService.transaction(async (query: QueryRunner) => {
			const totalCount = successArray.length * 9
			const inventory = await this.userAchievementService.getByUserId(userId)

			const cardsByColor = inventory.cards.filter(userCard => userCard.card.color === color)
			const otherCards = inventory.cards.filter(userCard => userCard.card.color !== color)
			const deletedCards = cardsByColor.slice(
				cardsByColor.length - totalCount,
				cardsByColor.length
			)
			const savedCards = cardsByColor.slice(0, cardsByColor.length - totalCount)
			inventory.cards = [...otherCards, ...savedCards]
			await this.removeMany(deletedCards)
			let nextRarity: ECardRarity
			if (rarity === ECardRarity.NULL) nextRarity = ECardRarity.ONE
			if (rarity === ECardRarity.ONE) nextRarity = ECardRarity.TWO
			if (rarity === ECardRarity.TWO) nextRarity = ECardRarity.THREE

			const countCard = successArray.filter(Boolean).length
			const newUserCards: UserCardEntity[] = []

			for (let i = 0; i < countCard; i++) {
				// ! Переписать на DISTINCT (уникальные значения)
				const cardsByRarity = await this.cardService.getByRarity(nextRarity)
				const colors = Array.from(new Set(cardsByRarity.map(c => c.color)))

				const randomColor = colors[Math.floor(Math.random() * colors.length)]
				const card = await this.cardService.getByColor(randomColor)
				const achievement = await this.userAchievementService.getByUserId(userId)
				const userCard = await this.create({ achievement, card })
				newUserCards.push(userCard)
			}
			inventory.cards = [...inventory.cards, ...newUserCards]
			await query.manager.save(UserAchievementEntity, inventory)

			await query.manager.save(UserCardEntity, newUserCards)
			console.log(newUserCards.map(c => c.card.color))
			return newUserCards
		})
	}
}
