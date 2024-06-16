import { UserAchievementEntity } from '@/modules/game/entities'

export const formatInventory = (list: UserAchievementEntity) => {
	// eslint-disable-next-line
	const { points, taps, stage, tries, lastTap, ...data } = list

	return `
Статистика:

Рейтинг: ${points}
Общее количество тапов: ${taps}
Количество попыток: ${tries}
Этап: ${stage}
    `
}
