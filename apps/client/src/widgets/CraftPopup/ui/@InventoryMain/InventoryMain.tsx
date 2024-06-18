import { inventoryItemsData } from '../../model/data/craftPopup.data'
import { InventoryItem } from '../@InventoryItem/InventoryItem'
import cl from './InventoryMain.module.scss'

export const InventoryMain = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__inventory}>
				{inventoryItemsData.map((item, index) => (
					<InventoryItem item={item} key={index} />
				))}
			</div>
		</div>
	)
}
