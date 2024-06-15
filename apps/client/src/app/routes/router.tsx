/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { LoaderSpinner, ProtectedRoute } from '@/shared'
import { Topbar } from '@/widgets/Topbar'

const MainPage = lazy(() => import('@/pages/Main'))
const ProfilePage = lazy(() => import('@/pages/Profile'))
const GamePage = lazy(() => import('@/pages/Game'))
const ProductPage = lazy(() => import('@/pages/Product'))
const RulesPage = lazy(() => import('@/pages/Rules'))
const InfoPage = lazy(() => import('@/pages/Info'))
const MapPage = lazy(() => import('@/pages/Map'))

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute variant='public'>
				<Suspense fallback={<LoaderSpinner />}>
					<MainPage />
				</Suspense>
			</ProtectedRoute>
		)
	},
	{
		path: '/profile',
		element: (
			<ProtectedRoute variant='public'>
				<Suspense fallback={<LoaderSpinner />}>
					<ProfilePage />
				</Suspense>
			</ProtectedRoute>
		),
		children: [
			{
				path: '',
				element: <Topbar />
			}
		]
	},
	{
		path: '/game',
		element: (
			<ProtectedRoute variant='public'>
				<Suspense fallback={<LoaderSpinner />}>
					<GamePage />
				</Suspense>
			</ProtectedRoute>
		),
		children: [
			{
				path: '',
				element: <Topbar />
			}
		]
	},
	{
		path: '/product/:id',
		element: (
			<ProtectedRoute variant='public'>
				<Suspense fallback={<LoaderSpinner />}>
					<ProductPage />
				</Suspense>
			</ProtectedRoute>
		)
	},
	{
		path: '/rules',
		element: (
			<ProtectedRoute variant='public'>
				<Suspense fallback={<LoaderSpinner />}>
					<RulesPage />
				</Suspense>
			</ProtectedRoute>
		)
	},
	{
		path: '/info',
		element: (
			<ProtectedRoute variant='public'>
				<Suspense fallback={<LoaderSpinner />}>
					<InfoPage />
				</Suspense>
			</ProtectedRoute>
		)
	},
	{
		path: '/map',
		element: (
			<ProtectedRoute variant='public'>
				<Suspense fallback={<LoaderSpinner />}>
					<MapPage />
				</Suspense>
			</ProtectedRoute>
		)
	}
])
