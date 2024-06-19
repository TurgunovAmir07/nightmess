import { ClosePopupButton } from '@/features/ClosePopup'
import cl from './InventoryHeader.module.scss'

export const InventoryHeader = ({
	handleInventory
}: {
	handleInventory: () => void
}) => {
	return (
		<div className={cl.root}>
			<h2 className={cl.root_title}>ИНВЕНТАРЬ</h2>
			<div className={cl.root_close}>
				<ClosePopupButton onClick={handleInventory} />
			</div>
		</div>
	)
}
