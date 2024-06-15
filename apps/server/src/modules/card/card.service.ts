import { BadRequestException, Injectable } from '@nestjs/common'
import { SettingsService } from '../settings/settings.service'
import { ESettingsName } from '@/common/enums'
import { CardRepository } from './card.repository'
import { cardGenerate } from '@/core/seeder/generate/card.generate'
import { CardEntity } from './entities'

@Injectable()
export class CardService {
	constructor(
		private readonly settingsService: SettingsService,
		private readonly cardRepository: CardRepository
	) {}

	private async findAndFormatCards(levelChancesMap: { [key: string]: string }) {
		const cards = await this.cardRepository.getAll()

		const groupedCards = cards.reduce((acc, item) => {
			const arr = acc[item.chance] ?? []
			acc[item.chance] = [...arr, item]
			return acc
		}, {})

		return cards.map(i => {
			const levelChance = +levelChancesMap[i.chance] / groupedCards[i.chance].length
			i.chance = String(levelChance)
			return i
		})
	}

	private getDropCard(cards: CardEntity[]) {
		const total = cards.reduce((acc, item) => acc + +item.chance, 0)
		const chance = total * Math.random()

		let current = 0

		for (const item of cards) {
			if (current <= chance && chance < current + +item.chance) {
				return item
			}
			current += +item.chance
		}
	}

	public async drop() {
		const settingsParamNames = [
			ESettingsName.ZERO_LEVEL_CHANCE,
			ESettingsName.FIRST_LEVEL_CHANCE,
			ESettingsName.SECOND_LEVEL_CHANCE,
			ESettingsName.THIRD_LEVEL_CHANCE
		]

		const [settingsMap, settingsArr] =
			await this.settingsService.getSettingsParamsByNamesMap(settingsParamNames)

		if (settingsArr.length !== settingsParamNames.length) {
			throw new BadRequestException('Не все параметры существуют. Обратитесь в поддержку')
		}

		const cards = await this.findAndFormatCards(settingsMap)

		return this.getDropCard(cards)
	}

	public async _seeding() {
		const oldCards = await this.cardRepository.getAll()
		const cards = cardGenerate()
		await this.cardRepository
			.deleteMany(oldCards)
			.then(() => this.cardRepository.saveMany(cards))
	}
}
