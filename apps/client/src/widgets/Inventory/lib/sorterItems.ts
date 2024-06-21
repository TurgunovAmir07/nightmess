import { colorOrder } from '@/shared'
import type { TCards } from '@/store'

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
