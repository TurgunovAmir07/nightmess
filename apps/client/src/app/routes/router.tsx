/* eslint-disable react-refresh/only-export-components */
import { Outlet, createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { LoaderSpinner, ProtectedRoute } from '@/shared'
import { Topbar } from '@/pages/Topbar'

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
		element: <Outlet />,
		children: [
			{
				path: '/',
				element: <Topbar />,
				children: [
					{
						path: '/profile',
						element: (
							<ProtectedRoute variant='public'>
								<Suspense fallback={<LoaderSpinner />}>
									<ProfilePage />
								</Suspense>
							</ProtectedRoute>
						)
					},
					{
						path: '/game',
						element: (
							<ProtectedRoute variant='public'>
								<Suspense fallback={<LoaderSpinner />}>
									<GamePage />
								</Suspense>
							</ProtectedRoute>
						)
					}
				]
			}
		]
	},
	{
		path: '/main',
		element: (
			<ProtectedRoute variant='public'>
				<Suspense fallback={<LoaderSpinner />}>
					<MainPage />
				</Suspense>
			</ProtectedRoute>
		)
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
