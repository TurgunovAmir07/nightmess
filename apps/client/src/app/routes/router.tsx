import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '../../pages/Main'
import { ProfilePage } from '../../pages/Profile'
import { GamePage } from '../../pages/Game'
import { ProductPage } from '../../pages/Product'
import { RulesPage } from '../../pages/Rules'
import { InfoPage } from '../../pages/Info'
import { MapPage } from '../../pages/Map'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/game',
    element: <GamePage />,
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
  },
  {
    path: '/rules',
    element: <RulesPage />,
  },
  {
    path: '/info',
    element: <InfoPage />,
  },
  {
    path: '/map',
    element: <MapPage />,
  },
])
