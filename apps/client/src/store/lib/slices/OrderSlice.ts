import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { IOrderInitialState } from '../../../utils/types'

const initialState: IOrderInitialState = {
  order: {
    items: [],
    email: '',
    tel: '',
    city: '',
    delivery: '',
    location: '',
    client: '',
    telegram: '',
    comment: '',
    promotional_code: '',
    payment: '',
    orderPrice: 0,
  },
}

export const OrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<IOrderInitialState['order']>) => {
      state.order = action.payload
    },
  },
})
