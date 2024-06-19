import cl from './ActivateEmailButton.module.scss'

export const ActivateEmailButton = () => {
	return (
		<button className={cl.root}>
			<img
				draggable={false}
				className={cl.root_img}
				src='/icon-email.png'
				alt='email'
			/>
		</button>
	)
}
