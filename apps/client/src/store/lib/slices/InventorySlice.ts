import { gameApi } from '@/store/api'
import type { ICard, TCards } from '@/store/model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ICraft {
	color: ICard['color'] | null
	count: TCards['count']
}

interface IInventoryInitialState {
	cards: TCards[]
	choosedCard: TCards | null
	isCardsActive: boolean
	craft: ICraft
	counterQuantity: number
}

const initialState: IInventoryInitialState = {
	cards: [],
	choosedCard: null,
	isCardsActive: false,
	craft: {
		color: null,
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
		},
		updateCraftState: (
			state,
			action: PayloadAction<{
				color: ICard['color']
				count: TCards['count']
			}>
		) => {
			state.craft = action.payload
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
