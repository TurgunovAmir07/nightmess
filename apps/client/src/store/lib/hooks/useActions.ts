import { bindActionCreators } from '@reduxjs/toolkit'
import {
	CartSlice,
	OrderSlice,
	UserDataSlice,
	authSlice,
	useTypedDispatch
} from '@/store'
import { useMemo } from 'react'

const rootActions = {
	...CartSlice.actions,
	...OrderSlice.actions,
	...UserDataSlice.actions,
	...authSlice.actions
}

export const useActions = () => {
	const dispatch = useTypedDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
