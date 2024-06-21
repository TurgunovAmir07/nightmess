import type { TCards } from '@/store'

const colorOrder = [
	'ONE',
	'TWO',
	'THREE',
	'FOUR',
	'FIVE',
	'SIX',
	'SEVEN',
	'EIGHT',
	'NINE'
]

export const sorterItems = (cards: TCards[]): (TCards | null)[] => {
	const sortedItemsTemp: (TCards | null)[] = Array(12).fill(null)
	cards.forEach(item => {
		const colorIndex = colorOrder.indexOf(item.card.color)
		if (colorIndex !== -1) {
			sortedItemsTemp[colorIndex] = item
		}
	})
	return sortedItemsTemp
}
