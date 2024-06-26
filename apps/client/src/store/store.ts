import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	CartSlice,
	InventorySlice,
	OrderSlice,
	UserDataSlice,
	authSlice
} from './lib'

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
import { authApi, gameApi } from './api'

const persistConfig = {
	key: 'nighmess',
	storage,
	whitelist: ['cart', 'userData']
}

const rootReducer = combineReducers({
	cart: CartSlice.reducer,
	order: OrderSlice.reducer,
	userData: UserDataSlice.reducer,
	authApi: authApi.reducer,
	authSlice: authSlice.reducer,
	gameApi: gameApi.reducer,
	inventorySlice: InventorySlice.reducer
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
			}).concat([authApi.middleware, gameApi.middleware])
	})
}

export type TypeRootState = ReturnType<typeof rootReducer>
export type TypeStore = ReturnType<typeof setupStore>
export type TypeDispatch = TypeStore['dispatch']
