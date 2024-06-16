import cl from './ActivateVkButton.module.scss'

export const ActivateVkButton = () => {
	return (
		<button className={cl.root}>
			<img className={cl.root_img} src='/icon-vk.png' alt='vk' />
		</button>
	)
}
