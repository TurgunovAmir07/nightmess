import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '@/store'
import { TypeRootState, UserModel } from '@/store'

interface InitialState {
	user:
		| (UserModel & {
				tokens: { access: string; refresh: string }
		  })
		| null
	isAuth: boolean
}

const initialState: InitialState = {
	user: null,
	isAuth: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: () => initialState
	},
	extraReducers: builder => {
		builder
			.addMatcher(
				authApi.endpoints.login.matchFulfilled,
				(state, action) => {
					// eslint-disable-next-line
					// @ts-ignore
					state.user = action.payload
					state.isAuth = true
				}
			)
			.addMatcher(
				authApi.endpoints.register.matchFulfilled,
				(state, action) => {
					// eslint-disable-next-line
					// @ts-ignore
					state.user = action.payload
					state.isAuth = true
				}
			)
			.addMatcher(
				authApi.endpoints.current.matchFulfilled,
				(state, action) => {
					// eslint-disable-next-line
					// @ts-ignore
					state.user = action.payload
					state.isAuth = true
				}
			)
	}
})

export const { logout } = authSlice.actions
export default authSlice.reducer

export const selectIsAuth = (state: TypeRootState) => state.auth.isAuth

export const selectUser = (state: TypeRootState) => state.auth.user
