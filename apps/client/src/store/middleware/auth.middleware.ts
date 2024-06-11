import { createListenerMiddleware } from '@reduxjs/toolkit'
import { authApi } from '@/store'

export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
	matcher: authApi.endpoints.login.matchFulfilled,
	effect: async (action, listenerApi) => {
		listenerApi.cancelActiveListeners()

		if (action.payload.tokens) {
			localStorage.setItem('token', action.payload.tokens.access)
		}
	}
})
