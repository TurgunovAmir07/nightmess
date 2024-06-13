import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '@/pages/Main'
import { ProfilePage } from '@/pages/Profile'
import { GamePage } from '@/pages/Game'
import { ProductPage } from '@/pages/Product'
import { RulesPage } from '@/pages/Rules'
import { InfoPage } from '@/pages/Info'
import { MapPage } from '@/pages/Map'
import { Topbar } from '@/widgets/Topbar'
import { ProtectedRoute } from '@/shared'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute variant='public'>
				<MainPage />
			</ProtectedRoute>
		)
	},
	{
		path: '/profile',
		element: (
			<ProtectedRoute variant='authorized'>
				<ProfilePage />
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
				<GamePage />
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
				<ProductPage />
			</ProtectedRoute>
		)
	},
	{
		path: '/rules',
		element: (
			<ProtectedRoute variant='public'>
				<RulesPage />
			</ProtectedRoute>
		)
	},
	{
		path: '/info',
		element: (
			<ProtectedRoute variant='public'>
				<InfoPage />
			</ProtectedRoute>
		)
	},
	{
		path: '/map',
		element: (
			<ProtectedRoute variant='public'>
				<MapPage />
			</ProtectedRoute>
		)
	}
])
