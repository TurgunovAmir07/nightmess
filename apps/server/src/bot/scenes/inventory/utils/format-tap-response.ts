import { CardEntity } from '@/modules/card/entities'

export const formatTapResponse = ({ card, message }: { card: CardEntity; message: string }) => {
	const { rarity, color, name, description } = card

	return `
    ${message}

name: ${name}
rarity: ${rarity}
color: ${color}
description: ${description}
    `
}
