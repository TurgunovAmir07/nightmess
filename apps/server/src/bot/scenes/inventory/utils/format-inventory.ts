import { TGetInventory } from '@/modules/game/types'

export const formatInventory = (inventory: TGetInventory) => {
	// eslint-disable-next-line
	// const { points, taps, stage, tries, lastTap, ...data } = list

	return `
Статистика:

Рейтинг:
Общее количество тапов:
Количество попыток: 
Этап: 
    `
}
