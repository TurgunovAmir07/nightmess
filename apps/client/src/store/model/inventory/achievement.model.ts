import { TCards } from './inventory.model'

export interface IAchievement {
	cards: TCards[]
	createDate: string
	id: number
	lastTap: string
	points: number
	stage: string
	taps: number
	tries: number
	updateDate: string
}
