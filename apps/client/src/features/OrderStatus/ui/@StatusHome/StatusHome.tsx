import cl from './StatusHome.module.scss'

export const StatusHome = () => {
	return (
		<div className={cl.root}>
			<button className={cl.root__text}>
				<img
					className={cl.root__text_icon}
					draggable={false}
					src='/icon-order-status-home.png'
					alt='home'
				/>
			</button>
		</div>
	)
}
