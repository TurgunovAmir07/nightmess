import { useEffect, useState } from 'react'
import { InventoryItem } from '../@InventoryItem/InventoryItem'
import cl from './InventoryMain.module.scss'
import { ChooseInventoryItemButton } from '@/features/ChooseInventoryItem'
import { sorterItems } from '../../lib/sorterItems'
import { type TCards, useTypedSelector, useActions } from '@/store'
import { CardsHaveBage } from '../@CardsHaveBage/CardsHaveBage'

export const InventoryMain = () => {
	const [sortedItems, setSortedItems] = useState<(TCards | null)[]>([])
	const isActive = useTypedSelector(
		state => state.inventorySlice.isCardsActive
	)
	const choosedCard = useTypedSelector(
		state => state.inventorySlice.choosedCard
	)

	const [cardsHave, setCardsHave] = useState<string>('0/9')

	const { toggleCardsActiveState, chooseCard } = useActions()

	const data = useTypedSelector(state => state.inventorySlice)

	const handleChecked = (id: number) => {
		if (isActive === true) {
			chooseCard({ id })
		}
	}

	const handleActive = () => {
		toggleCardsActiveState()
		chooseCard({ id: null })
	}

	useEffect(() => {
		if (data && data.cards) {
			const sorted = sorterItems(data.cards)
			setSortedItems(sorted)
			setCardsHave(`${data.cards.length}/9`)
		}
	}, [data])

	return (
		<div className={cl.root}>
			<CardsHaveBage quantity={cardsHave} />
			<ChooseInventoryItemButton
				handleActive={handleActive}
				isActive={isActive}
			/>
			<div className={cl.root__inventory}>
				{sortedItems.map((item, index) => (
					<InventoryItem
						key={index}
						item={item}
						isChecked={item ? choosedCard?.id === item.id : false}
						isActive={isActive}
						handleChecked={() => item && handleChecked(item.id)}
					/>
				))}
			</div>
		</div>
	)
}
