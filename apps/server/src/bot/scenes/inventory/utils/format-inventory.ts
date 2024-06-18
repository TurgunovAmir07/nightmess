import type { TGetInventory, TGetInventoryItem } from '@/modules/game/types'

export const formatInventory = (inventory: TGetInventory) =>
	inventory.cards.reduce((acc, item: TGetInventoryItem, index) => {
		return acc + `${index + 1}. ${item.card.name} x${item.count} \n`
	}, 'Инвентарь: \n\n')
