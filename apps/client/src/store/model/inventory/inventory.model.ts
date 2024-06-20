export interface ICard {
	id: number
	createDate: string
	updateDate: string
	rarity: string
	color: string
	name: string
	description: string
	image: string
	miniature: string
}

export interface TCards {
	id: number
	createDate: string
	updateDate: string
	card: ICard
	count: number
}

export interface inventoryModel {
	id: number
	createDate: string
	updateDate: string
	points: number
	taps: number
	stage: string
	tries: number
	lastTap: string
	cards: TCards[]
}
