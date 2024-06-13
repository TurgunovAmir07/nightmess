import cl from './CloseButton.module.scss'

export const CloseButton = () => {
	return (
		<div className={cl.root}>
			<button className={cl.root__text}>
				<img
					draggable={false}
					style={{ width: '55px' }}
					src='/button-close-popup.png'
					alt='close'
				/>
			</button>
		</div>
	)
}
