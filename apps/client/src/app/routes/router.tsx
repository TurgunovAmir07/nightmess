import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '@/pages/Main'
import { ProfilePage } from '@/pages/Profile'
import { GamePage } from '@/pages/Game'
import { ProductPage } from '@/pages/Product'
import { RulesPage } from '@/pages/Rules'
import { InfoPage } from '@/pages/Info'
import { MapPage } from '@/pages/Map'
import { Topbar } from '@/widgets/Topbar'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />
	},
	{
		path: '/profile',
		element: <ProfilePage />,
		children: [
			{
				path: '',
				element: <Topbar />
			}
		]
	},
	{
		path: '/game',
		element: <GamePage />,
		children: [
			{
				path: '',
				element: <Topbar />
			}
		]
	},
	{
		path: '/product/:id',
		element: <ProductPage />
	},
	{
		path: '/rules',
		element: <RulesPage />
	},
	{
		path: '/info',
		element: <InfoPage />
	},
	{
		path: '/map',
		element: <MapPage />
	}
])
