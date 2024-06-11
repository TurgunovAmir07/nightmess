import { ICartItem } from '@/store'

export interface IOrderInitialState {
	order: {
		items: ICartItem[]
		email: string
		tel: string
		city: string
		delivery: string
		location: string
		client: string
		telegram: string
		comment: string
		promotional_code: string
		payment: string
		orderPrice: number
	}
}

export interface IOrderPayload {
	items: ICartItem[]
	email: string
	tel: string
	city: string
	delivery: string
	location: string
	client: string
	telegram: string
	comment: string
	promotional_code: string
	payment: string
	orderPrice: number
}
