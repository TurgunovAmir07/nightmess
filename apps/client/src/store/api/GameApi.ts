import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TypeRootState, inventoryModel } from '@/store'
import { IRating } from '../model/rating/rating.model'
import { GetCardResponse } from '../model/inventory/get-card.response'

const baseQuery = fetchBaseQuery({
	baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/game`,
	credentials: 'include',

	// Automatically use token in authorization header if it provided
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as TypeRootState).authSlice.accessToken
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
	tagTypes: ['Inventory'],
	endpoints: build => ({
		getCard: build.query<GetCardResponse, void>({
			query: () => ({
				url: 'tap'
			}),
			providesTags: ['Inventory']
		}),
		getInventory: build.query<inventoryModel, void>({
			query: () => ({
				url: 'inventory'
			}),
			providesTags: ['Inventory']
		}),
		getRating: build.query<IRating[], void>({
			query: () => ({
				url: 'rating'
			}),
			providesTags: ['Inventory']
		}),
		// eslint-disable-next-line
		craftCard: build.mutation<any, any>({
			query: ({ color, count }) => ({
				url: 'craft',
				method: 'POST',
				body: {
					color,
					count
				},
				invalidatesTags: ['Inventory']
			})
		}),
		// eslint-disable-next-line
		checkStatus: build.query<any, void>({
			query: () => ({
				url: 'status'
			}),
			providesTags: ['Inventory']
		})
	})
})

export const {
	useGetCardQuery,
	useGetInventoryQuery,
	useLazyCheckStatusQuery,
	useLazyGetInventoryQuery,
	useGetRatingQuery,
	useCraftCardMutation
} = gameApi
