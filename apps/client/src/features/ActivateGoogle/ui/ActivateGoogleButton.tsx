import cl from './ActivateGoogleButton.module.scss'

export const ActivateGoogleButton = () => {
	return (
		<button className={cl.root}>
			<img className={cl.root_img} src='/icon-google.png' alt='google' />
		</button>
	)
}
