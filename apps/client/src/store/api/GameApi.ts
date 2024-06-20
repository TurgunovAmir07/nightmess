import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TypeRootState, inventoryModel } from '@/store'
import { IRating } from '../model/rating/rating.model'

const baseQuery = fetchBaseQuery({
	baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/game`,
	credentials: 'include',

	// Automatically use token in authorization header if it provided
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as TypeRootState)['authSlice'].accessToken
		if (token) {
			headers.set('Authorization', `Bearer ${token}`)
			headers.set('Content-Type', 'application/json')
		}

		return headers
	}
})

export const gameApi = createApi({
	reducerPath: 'gameApi',
	baseQuery: baseQuery,
	endpoints: build => ({
		// eslint-disable-next-line
		getCard: build.query<any, void>({
			query: () => ({
				url: 'tap'
			})
		}),
		getInventory: build.query<inventoryModel, void>({
			query: () => ({
				url: 'inventory'
			})
		}),
		getRating: build.query<IRating[], void>({
			query: () => ({
				url: 'rating'
			})
		})
	})
})

export const { useGetCardQuery, useGetInventoryQuery, useGetRatingQuery } =
	gameApi
