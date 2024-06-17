import cl from './OpenShopButton.module.scss'

export const OpenShopButton = () => {
	return (
		<button className={cl.root}>
			<img className={cl.root_img} src='/icon-shop.png' alt='shop' />
		</button>
	)
}
