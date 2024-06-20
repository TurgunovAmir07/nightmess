import { useEffect, useState } from 'react'
import { InventoryItem } from '../@InventoryItem/InventoryItem'
import cl from './InventoryMain.module.scss'
import { ChooseInventoryItemButton } from '@/features/ChooseInventoryItem'
import { sorterItems } from '../../lib/sorterItems'
import { type TCards, useGetInventoryQuery } from '@/store'

export const InventoryMain = () => {
	const [selectedItemId, setSelectedItemId] = useState<number | null>(null)
	const [isActive, setIsActive] = useState<boolean>(false)
	const [sortedItems, setSortedItems] = useState<(TCards | null)[]>([])

	const { data } = useGetInventoryQuery()

	const handleChecked = (id: number) => {
		if (isActive === true) {
			setSelectedItemId(id)
		}
	}

	const handleActive = () => {
		setIsActive(prev => !prev)
		setSelectedItemId(null)
	}

	useEffect(() => {
		if (data && data.cards) {
			const sorted = sorterItems(data.cards)
			setSortedItems(sorted)
		}
	}, [data])

	return (
		<div className={cl.root}>
			<ChooseInventoryItemButton
				handleActive={handleActive}
				isActive={isActive}
			/>
			<div className={cl.root__inventory}>
				{sortedItems.map((item, index) => (
					<InventoryItem
						key={index}
						item={item}
						isChecked={item ? selectedItemId === item.id : false}
						isActive={isActive}
						handleChecked={() => item && handleChecked(item.id)}
					/>
				))}
			</div>
		</div>
	)
}
