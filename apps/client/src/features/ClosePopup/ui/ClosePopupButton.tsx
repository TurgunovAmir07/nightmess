import cl from './ClosePopupButton.module.scss'

export const ClosePopupButton = ({ onClick }: { onClick?: () => void }) => {
	return (
		<button onClick={onClick} className={cl.root}>
			<img
				draggable={false}
				className={cl.root__close}
				src='/button-close-popup.png'
				alt='close'
			/>
		</button>
	)
}
