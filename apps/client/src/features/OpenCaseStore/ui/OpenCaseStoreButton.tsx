import cl from './OpenCaseStoreButton.module.scss'

export const OpenCaseStoreButton = () => {
	return (
		<button className={cl.root}>
			<img
				className={cl.root_img}
				src='/icon-inventory-box.png'
				alt='case'
			/>
		</button>
	)
}
