import { gameApi } from '@/store/api'
import type { TCards } from '@/store/model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInventoryInitialState {
	cards: TCards[]
	choosedCard: TCards | null
	isCardsActive: boolean
	craftedCard: {
		cards: TCards[]
		message: string
	}
	counterQuantity: number
}

const initialState: IInventoryInitialState = {
	cards: [],
	choosedCard: null,
	isCardsActive: false,
	craftedCard: {
		cards: [],
		message: ''
	},
	counterQuantity: 1
}

export const InventorySlice = createSlice({
	name: 'inventorySlice',
	initialState,
	reducers: {
		toggleCardsActiveState: state => {
			state.isCardsActive = !state.isCardsActive
		},
		chooseCard: (
			state,
			action: PayloadAction<{ id: TCards['id'] | null }>
		) => {
			const card =
				state.cards.find(card => card.id === action.payload.id) || null
			if (card?.card.color === 'NINE') {
				state.cards = state.cards.filter(
					card => card.card.color !== 'NINE'
				)
			}
			state.choosedCard = card
			state.counterQuantity = 1
		},
		changeCounterQuantity: (
			state,
			action: PayloadAction<'plus' | 'minus'>
		) => {
			if (action.payload === 'plus') {
				state.counterQuantity++
			} else {
				state.counterQuantity--
			}
		},
		getCraftState: (
			state,
			action: PayloadAction<{
				cards: TCards[] | []
				message: string
			}>
		) => {
			state.craftedCard = action.payload
		}
	},
	extraReducers: builder => {
		builder.addMatcher(
			gameApi.endpoints.getInventory.matchFulfilled,
			(state, action: PayloadAction<{ cards: TCards[] }>) => {
				state.cards = action.payload.cards
			}
		)
	}
})
