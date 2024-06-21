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
	return cards.sort(
		(a, b) =>
			colorOrder.indexOf(b.card.color) - colorOrder.indexOf(a.card.color)
	)
}
