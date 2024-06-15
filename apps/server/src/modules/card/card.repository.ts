import { InjectRepository } from '@nestjs/typeorm'
import { CardEntity } from './entities'
import { Repository } from 'typeorm'

export class CardRepository {
	constructor(
		@InjectRepository(CardEntity) private readonly cardRepository: Repository<CardEntity>
	) {}

	public async getAllCards() {
		return this.cardRepository.find()
	}
}
