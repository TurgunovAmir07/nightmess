import cl from './OpenInventoryButton.module.scss'

export const OpenInventoryButton = () => {
	return (
		<button className={cl.root}>
			<span className={cl.root__text}>OPEN</span>
		</button>
	)
}
