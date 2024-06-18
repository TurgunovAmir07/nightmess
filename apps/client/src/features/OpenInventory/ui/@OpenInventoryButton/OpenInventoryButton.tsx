import cl from './OpenInventoryButton.module.scss'

export const OpenInventoryButton = ({
	handleInventory
}: {
	handleInventory: () => void
}) => {
	return (
		<button onClick={handleInventory} className={cl.root}>
			OPEN
		</button>
	)
}
