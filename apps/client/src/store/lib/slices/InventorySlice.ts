import { gameApi } from '@/store/api'
import { TCards } from '@/store/model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInventoryInitialState {
	cards: TCards[]
	choosedCard: TCards['id'] | null
	isCardsActive: boolean
}

const initialState: IInventoryInitialState = {
	cards: [],
	choosedCard: null,
	isCardsActive: false
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
