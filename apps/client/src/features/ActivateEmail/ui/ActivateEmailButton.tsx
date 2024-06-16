import cl from './ActivateEmailButton.module.scss'

export const ActivateEmailButton = () => {
	return (
		<button className={cl.root}>
			<img className={cl.root_img} src='/icon-email.png' alt='email' />
		</button>
	)
}
