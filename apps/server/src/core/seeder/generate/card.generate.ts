import { ECardRarity, ECardColor } from '@/common/enums'
import { CardEntity } from '@/modules/card/entities'
import { getEnumItemByIndex } from '../utils'
import { ESettingsName } from '@/common/enums'

export const cardGenerate = () => {
	const cardsStructure = [
		ECardRarity.NULL,
		ECardRarity.NULL,
		ECardRarity.NULL,
		ECardRarity.ONE,
		ECardRarity.ONE,
		ECardRarity.ONE,
		ECardRarity.TWO,
		ECardRarity.TWO,
		ECardRarity.THREE
	]

	return cardsStructure.map((i, index) => {
		const card = new CardEntity()

		const cardName = getEnumItemByIndex(ECardColor, index)

		card.rarity = i
		card.image = `${cardName.toLowerCase()}.png`
		card.miniature = `${cardName.toLowerCase()}-min.png`
		card.color = cardName
		card.name = cardName
		card.description = cardName

		switch (i) {
			case ECardRarity.NULL:
				{
					card.chance = ESettingsName.ZERO_LEVEL_CHANCE
				}
				break
			case ECardRarity.ONE:
				{
					card.chance = ESettingsName.FIRST_LEVEL_CHANCE
				}
				break
			case ECardRarity.TWO:
				{
					card.chance = ESettingsName.SECOND_LEVEL_CHANCE
				}
				break
			case ECardRarity.THREE:
				{
					card.chance = ESettingsName.THIRD_LEVEL_CHANCE
				}
				break
		}

		return card
	})
}
