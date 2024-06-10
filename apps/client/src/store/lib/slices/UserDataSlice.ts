import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { IUserDataInitialState } from '../../../utils/types'

const initialState: IUserDataInitialState = {
  userData: {
    email: '',
    tel: '',
    city: '',
    delivery: '',
    location: '',
    client: '',
    telegram: '',
  },
}

export const UserDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<IUserDataInitialState['userData']>
    ) => {
      state.userData = action.payload
    },
  },
})
