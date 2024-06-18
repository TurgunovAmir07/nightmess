import { useState } from 'react'
import { inventoryItemsData } from '../../model/data/craftPopup.data'
import { InventoryItem } from '../@InventoryItem/InventoryItem'
import cl from './InventoryMain.module.scss'

export const InventoryMain = () => {
	const [selectedItemId, setSelectedItemId] = useState<number | null>(null)

	const handleChecked = (id: number) => {
		setSelectedItemId(id)
	}

	return (
		<div className={cl.root}>
			<div className={cl.root__inventory}>
				{inventoryItemsData.map((item, index) => (
					<InventoryItem
						isChecked={selectedItemId === item.id}
						handleChecked={() => handleChecked(item.id)}
						item={item}
						key={index}
					/>
				))}
			</div>
		</div>
	)
}
