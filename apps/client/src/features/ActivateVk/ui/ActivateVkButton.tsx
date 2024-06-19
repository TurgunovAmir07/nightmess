import cl from './ActivateVkButton.module.scss'

export const ActivateVkButton = () => {
	return (
		<button className={cl.root}>
			<img
				draggable={false}
				className={cl.root_img}
				src='/icon-vk.png'
				alt='vk'
			/>
		</button>
	)
}
