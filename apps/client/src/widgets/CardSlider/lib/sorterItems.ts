import { colorOrder } from '@/shared'
import type { TCards } from '@/store'

export const sorterItems = (cards: TCards[]): (TCards | null)[] => {
	return cards.sort(
		(a, b) =>
			colorOrder.indexOf(b.card.color) - colorOrder.indexOf(a.card.color)
	)
}
