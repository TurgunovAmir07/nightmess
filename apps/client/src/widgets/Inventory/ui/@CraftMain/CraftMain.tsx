import { useTypedSelector } from '@/store'
import cl from './CraftMain.module.scss'
import { useMemo } from 'react'
import { ChangeCraftQuantity } from '@/features/ChangeCraftQuantity'

export const CraftMain = () => {
	const choosedCard = useTypedSelector(
		state => state.inventorySlice.choosedCard
	)

	const cards = useTypedSelector(state => state.inventorySlice.cards)

	const card = useMemo(() => {
		return cards.find(item => item.id === choosedCard)
	}, [cards, choosedCard])

	return (
		<>
			{choosedCard && <ChangeCraftQuantity />}
			<div className={cl.root}>
				<div className={cl.root__craft}>
					{/*  */}
					{Array.from({ length: Number(card?.count) }).map(
						(_, index) => (
							<div key={index} className={cl.root__craft_item}>
								<img
									className={cl.root__craft_item_img}
									src={card?.card.miniature}
									alt={card?.card.name}
								/>
							</div>
						)
					)}
					{/*  */}
					<div className={cl.root__craft_result}>
						<img
							draggable={false}
							className={cl.root__craft_result_img}
							src='/icon-inventory-item.png'
							alt='result'
						/>
					</div>
				</div>
			</div>
		</>
	)
}
