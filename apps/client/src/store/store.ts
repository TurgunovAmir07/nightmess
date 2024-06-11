import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { CartSlice, OrderSlice, UserDataSlice } from './lib'

import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './lib/slices/AuthSlice'
import { api } from './api'
import { listenerMiddleware } from './middleware'

const persistConfig = {
	key: 'nighmess',
	storage,
	whitelist: ['cart', 'userData']
}

const rootReducer = combineReducers({
	cart: CartSlice.reducer,
	order: OrderSlice.reducer,
	userData: UserDataSlice.reducer,
	[api.reducerPath]: api.reducer,
	auth
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
	return configureStore({
		reducer: persistedReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER
					]
				}
			})
				.concat(api.middleware)
				.prepend(listenerMiddleware.middleware)
	})
}

export type TypeRootState = ReturnType<typeof rootReducer>
