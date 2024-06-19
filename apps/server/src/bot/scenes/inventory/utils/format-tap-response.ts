import { UserCardEntity } from '@/modules/card/entities'

export const formatTapResponse = ({ card, message }: { card: UserCardEntity; message: string }) => {
	const { rarity, color, name, description } = card.card

	return `
    ${message}

name: ${name}
rarity: ${rarity}
color: ${color}
description: ${description}
    `
}
