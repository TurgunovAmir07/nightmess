import { createSlice } from '@reduxjs/toolkit'
import { IUser, authApi } from '@/store'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

interface IAuthInitialState {
	user: IUser | null
	accessToken: string | null
	isAuth: boolean
	error: string | null | FetchBaseQueryError
}

const initialState: IAuthInitialState = {
	user: null,
	accessToken: null,
	isAuth: false,
	error: null
}

export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addMatcher(
				authApi.endpoints.refreshToken.matchFulfilled,
				(state, { payload }) => {
					state.accessToken = payload.accessToken
					state.user = payload.profile
					state.isAuth = true
				}
			)
			.addMatcher(
				authApi.endpoints.logoutUser.matchFulfilled,
				() => initialState
			)
	},
	selectors: {
		getAccessToken: state => state.accessToken
	}
})
