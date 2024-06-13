import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/index.scss'

declare global {
	interface Window {
		Telegram: Telegram
	}
}

if (import.meta.env.VITE_APP_TYPE === 'telegram') {
	const script = document.createElement('script')
	script.type = 'text/javascript'

	script.src = 'https://telegram.org/js/telegram-web-app.js'

	document.getElementsByTagName('head')[0].appendChild(script)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
