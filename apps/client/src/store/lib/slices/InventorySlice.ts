import { gameApi } from '@/store/api'
import type { ICard, TCards } from '@/store/model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInventoryInitialState {
	cards: TCards[]
	choosedCard: TCards['id'] | null
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
			state.choosedCard = action.payload.id
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
