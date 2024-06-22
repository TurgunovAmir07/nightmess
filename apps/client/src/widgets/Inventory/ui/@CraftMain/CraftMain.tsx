import { useTypedSelector } from '@/store'
import cl from './CraftMain.module.scss'
import { ChangeCraftQuantity } from '@/features/ChangeCraftQuantity'
import { CraftCardButton } from '@/features/CraftCard'

export const CraftMain = () => {
	const choosedCard = useTypedSelector(
		state => state.inventorySlice.choosedCard
	)

	const craftedCard = useTypedSelector(
		state => state.inventorySlice.craftedCard
	)

	return (
		<>
			{choosedCard && (
				<>
					<ChangeCraftQuantity /> <CraftCardButton />
				</>
			)}
			<div className={cl.root}>
				<div className={cl.root__craft}>
					{Array.from({
						length: Number(
							choosedCard && choosedCard?.count >= 9
								? 9
								: choosedCard?.count
						)
					}).map((_, index) => (
						<div key={index} className={cl.root__craft_item}>
							{choosedCard?.card && (
								<img
									className={cl.root__craft_item_img}
									src={`${
										import.meta.env.VITE_SERVER_STATIC_URL
									}/${choosedCard?.card.miniature}`}
									alt={choosedCard?.card.name}
								/>
							)}
						</div>
					))}
					<div className={cl.root__craft_result}>
						{craftedCard?.cards &&
							craftedCard.cards.length > 0 &&
							craftedCard.cards[0].card && (
								<img
									draggable={false}
									className={cl.root__craft_result_img}
									src={`${
										import.meta.env.VITE_SERVER_STATIC_URL
									}/${craftedCard.cards[0].card.miniature}`}
									alt={craftedCard.cards[0].card.name}
								/>
							)}
					</div>
				</div>
			</div>
		</>
	)
}
