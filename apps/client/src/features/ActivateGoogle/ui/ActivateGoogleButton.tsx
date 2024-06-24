import cl from './ActivateGoogleButton.module.scss'

export const ActivateGoogleButton = () => {
	const login = () => {
		window.open(import.meta.env.VITE_GOOGLE_REDIRECT_URL, '_self')
	}

	return (
		<button className={cl.root} onClick={login}>
			<img
				draggable={false}
				className={cl.root_img}
				src='/icon-google.png'
				alt='google'
			/>
		</button>
	)
}
