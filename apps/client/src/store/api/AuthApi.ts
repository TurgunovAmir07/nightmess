import { authSlice, LoginErrorResponse, TypeRootState } from '@/store'
import {
	createApi,
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/auth`,
	credentials: 'include',

	prepareHeaders: (headers, { getState }) => {
		const state = getState() as TypeRootState

		const token = state['authSlice'].accessToken
		if (token) {
			headers.set('Authorization', `Bearer ${token}`)
			headers.set('Content-Type', 'application/json')
		}

		return headers
	}
})

const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError | LoginErrorResponse
> = async (args, api, extraOptions) => {
	const result = await baseQuery(
		args
			? args
			: {
					url: 'refresh',
					credentials: 'include',
					headers: {
						Authorization: `Bearer ${
							authSlice.getInitialState().accessToken
						}`,
						'Content-Type': 'application/json'
					}
					// eslint-disable-next-line
			  },
		api,
		extraOptions
	)

	return result
}
export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: baseQueryWithReauth,
	tagTypes: ['Auth'],
	endpoints: build => ({
		// FIXME: типизировать
		// eslint-disable-next-line
		loginUser: build.query<any, any>({
			query: user => ({
				url: 'login',
				method: 'POST',
				body: user
			}),
			providesTags: ['Auth']
		}),
		logoutUser: build.query<void, void>({
			query: () => ({
				method: 'GET',
				url: 'logout'
			}),
			providesTags: ['Auth']
		}),
		// FIXME: типизировать
		// eslint-disable-next-line
		registerUser: build.query<any, any>({
			query: user => ({
				url: 'register',
				method: 'POST',
				body: user
			}),
			providesTags: ['Auth']
		}),
		// FIXME: типизировать
		// eslint-disable-next-line
		refreshToken: build.query<any, void>({
			query: () => ({
				url: 'refresh'
			}),
			providesTags: ['Auth']
		})
	})
})

export const {
	useLoginUserQuery,
	useRefreshTokenQuery,
	useLogoutUserQuery,
	useRegisterUserQuery
} = authApi
