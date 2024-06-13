import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { StoreProvider } from '@/store'
import { useEffect } from 'react'

function App() {
	const tg = window.Telegram?.WebApp

	useEffect(() => {
		if (tg) {
			tg.ready()
		}
	}, [tg])

	return (
		<StoreProvider>
			<RouterProvider router={router} />
		</StoreProvider>
	)
}

export default App
