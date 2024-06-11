import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { CartSlice } from '@/store'
import { useMemo } from 'react'

const rootActions = {
	...CartSlice.actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
