import { useRefreshTokenQuery, useTypedSelector } from '@/store'
import type { ReactNode } from 'react'
import { LoaderSpinner } from '@/shared'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({
	children,
	variant
}: {
	children: ReactNode
	variant: 'public' | 'authorized' | 'unauthorized'
}) => {
	const { isLoading, data } = useRefreshTokenQuery()
	const user = useTypedSelector(store => store['authSlice'].user)

	if (isLoading) return <LoaderSpinner />

	if (variant === 'unauthorized')
		return user || data ? <Navigate to='/main' /> : children

	if (variant === 'authorized')
		return user || data ? children : <Navigate to='/main' />

	return children
}
