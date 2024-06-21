import { UserCardEntity } from '@/modules/card/entities'
export const formatTapResponse = ({
	card,
	message
}: {
	card?: UserCardEntity
	message: string
}) => {
	if (card.card) {
		const { rarity, name, description } = card.card
		return `
        ${message}
		
Название: ${name}
Редкость: ${rarity}
Описание: ${description}
        `
	}

	return message
}
