import { TGetInventory } from '@/modules/game/types'

export const formatStatistic = (inventory: TGetInventory) => `
Ваша статистика:

Рейтинг: ${inventory.points}
Попытки: ${inventory.tries}
Всего накликано: ${inventory.taps}
`
