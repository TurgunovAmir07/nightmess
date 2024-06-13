import cl from './StatusOrder.module.scss'

export const StatusOrder = () => {
	return (
		<div className={cl.root}>
			<button className={cl.root__text}>
				<img
					className={cl.root__text_icon}
					draggable={false}
					src='/icon-order-status-task.png'
					alt='order'
				/>
			</button>
		</div>
	)
}
