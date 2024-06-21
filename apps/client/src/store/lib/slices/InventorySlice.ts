import { gameApi } from '@/store/api'
import type { ICard, TCards } from '@/store/model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInventoryInitialState {
	cards: TCards[]
	choosedCard: TCards | null
	isCardsActive: boolean
	craft: {
		color: ICard['color']
		count: TCards['count']
	}
	counterQuantity: number
}

const initialState: IInventoryInitialState = {
	cards: [],
	choosedCard: null,
	isCardsActive: false,
	craft: {
		color: '',
		count: 0
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
			state.choosedCard = card
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
