import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '@/pages/Main'
import { ProfilePage } from '@/pages/Profile'
import { GamePage } from '@/pages/Game'
import { ProductPage } from '@/pages/Product'
import { RulesPage } from '@/pages/Rules'
import { InfoPage } from '@/pages/Info'
import { MapPage } from '@/pages/Map'
import { HomePage } from '@/pages/Home'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />
	},
	// example, remove after fix
	{
		path: '/home',
		element: <HomePage />,
		children: [
			{
				path: 'profile',
				element: <></>
			}
		]
	},
	{
		path: '/profile',
		element: <ProfilePage />
	},
	{
		path: '/game',
		element: <GamePage />
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
