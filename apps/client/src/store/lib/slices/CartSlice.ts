import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type {
  IAddToCartPayload,
  IChangeQuantityPayload,
  ICartInitialState,
} from '../../../utils/types'

const initialState: ICartInitialState = {
  items: [],
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload.product.id
      )
      if (!item) {
        state.items.push({ ...action.payload, id: state.items.length })
      } else {
        item.quantity++
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload.id
      )
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload

      const item = state.items.find((item) => item.id === id)
      if (item) {
        type === 'plus' ? item.quantity++ : item.quantity--
      }
    },
  },
})
