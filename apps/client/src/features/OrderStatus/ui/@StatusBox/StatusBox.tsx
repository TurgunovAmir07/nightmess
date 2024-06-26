import cl from './StatusBox.module.scss'

export const StatusBox = () => {
	return (
		<div className={cl.root}>
			<button className={cl.root__text}>
				<img
					className={cl.root__text_icon}
					draggable={false}
					src='/icon-order-status-box.png'
					alt='box'
				/>
			</button>
		</div>
	)
}
