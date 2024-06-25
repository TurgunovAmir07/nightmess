import cl from './ActivateEmailButton.module.scss'

export const ActivateEmailButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<>
			<button onClick={onClick} className={cl.root}>
				<img
					draggable={false}
					className={cl.root_img}
					src='/icon-email.png'
					alt='email'
				/>
			</button>
		</>
	)
}
