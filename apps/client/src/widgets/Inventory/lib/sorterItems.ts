import type { TCards } from '@/store'

export const sorterItems = (cards: TCards[]): (TCards | null)[] => {
	const sortedItemsTemp: (TCards | null)[] = Array(12).fill(null)
	cards.forEach(item => {
		sortedItemsTemp[item.card.id - 1] = item
	})
	return sortedItemsTemp
}
