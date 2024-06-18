import { useState } from 'react'
import { inventoryItemsData } from '../../model/data/craftPopup.data'
import { InventoryItem } from '../@InventoryItem/InventoryItem'
import cl from './InventoryMain.module.scss'
import { ChooseInventoryItemButton } from '@/features/ChooseInventoryItem'

export const InventoryMain = () => {
	const [selectedItemId, setSelectedItemId] = useState<number | null>(null)
	const [isActive, setIsActive] = useState(false)

	const handleChecked = (id: number) => {
		if (isActive === true) {
			setSelectedItemId(id)
		}
	}

	const handleActive = () => {
		setIsActive(prev => !prev)
		setSelectedItemId(null)
	}

	return (
		<div className={cl.root}>
			<ChooseInventoryItemButton
				handleActive={handleActive}
				isActive={isActive}
			/>
			<div className={cl.root__inventory}>
				{inventoryItemsData.map((item, index) => (
					<InventoryItem
						isActive={isActive}
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
