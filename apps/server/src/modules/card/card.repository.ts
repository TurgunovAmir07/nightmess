import { InjectRepository } from '@nestjs/typeorm'
import { CardEntity } from './entities'
import { Repository } from 'typeorm'
import { DatabaseService } from '@/core/database/database.service'
import { ECardColor, ECardRarity } from '@/common/enums'

export class CardRepository {
	constructor(
		@InjectRepository(CardEntity) private readonly cardRepository: Repository<CardEntity>,
		private readonly databaseService: DatabaseService
	) {}

	public async getAll() {
		return this.cardRepository.find()
	}

	public async saveMany(cards: CardEntity[]) {
		return this.cardRepository.save(cards)
	}

	public async deleteMany(cards: CardEntity[]) {
		return this.cardRepository.remove(cards)
	}

	public async getByRarity(rarity: ECardRarity) {
		const cards = await this.cardRepository.find({ where: { rarity } })
		return cards
	}

	public async getByColor(color: ECardColor) {
		const cards = await this.cardRepository.findOne({ where: { color } })
		return cards
	}
}
