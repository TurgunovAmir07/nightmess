import { IAchievement } from './achievement.model'
import { ICard } from './inventory.model'

export interface GetCardResponse {
	card: {
		achievement: IAchievement
		card: ICard
		createDate: string
		id: number
		updateDate: string
	}
	message: string
}
