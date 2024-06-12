import cl from './StatusDelivery.module.scss'

export const StatusDelivery = () => {
	return (
		<div className={cl.root}>
			<button className={cl.root__text}>
				<img
					className={cl.root__text_icon}
					draggable={false}
					src='/машина.png'
					alt='car'
				/>
			</button>
		</div>
	)
}
