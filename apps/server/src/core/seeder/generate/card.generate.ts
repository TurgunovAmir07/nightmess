import { ECardRarity, ECardColor } from '@/common/enums'
import { CardEntity } from '@/modules/card/entities'
import { getEnumItemByIndex } from '@/common/utils'

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
		card.color = cardName
		card.name = cardName
		card.description = cardName

		return card
	})
}
