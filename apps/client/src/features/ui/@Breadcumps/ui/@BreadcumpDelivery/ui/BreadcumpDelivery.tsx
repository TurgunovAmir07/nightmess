import cl from './BreadcumpDelivery.module.scss'

export const BreadcumpDelivery = () => {
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
