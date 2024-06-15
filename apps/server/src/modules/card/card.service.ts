import { BadRequestException, Injectable } from '@nestjs/common'
import { SettingsService } from '../settings/settings.service'
import { ESettingsName } from '@/common/enums'
import { CardRepository } from './card.repository'
import { cardGenerate } from '@/core/seeder/generate/card.generate'

@Injectable()
export class CardService {
	constructor(
		private readonly settingsService: SettingsService,
		private readonly cardRepository: CardRepository
	) {}

	private async findAndGroupCardsByLevel() {
		const cards = await this.cardRepository.getAll()
	}

	public async drop() {
		const settingsParamNames = [
			ESettingsName.ZERO_LEVEL_CHANCE,
			ESettingsName.FIRST_LEVEL_CHANCE,
			ESettingsName.SECOND_LEVEL_CHANCE,
			ESettingsName.THIRD_LEVEL_CHANCE
		]

		const settings = await this.settingsService.getSettingsParamsByNames(settingsParamNames)

		if (settings.length !== settingsParamNames.length) {
			throw new BadRequestException('Не все параметры существуют. Обратитесь в поддержку')
		}

		const total = settings.reduce((acc, item) => acc + +item.value, 0)
		const chance = total * Math.random()

		const current = 0
	}

	public async _seeding() {
		const oldCards = await this.cardRepository.getAll()
		const cards = cardGenerate()
		await this.cardRepository
			.deleteMany(oldCards)
			.then(() => this.cardRepository.saveMany(cards))
	}
}
