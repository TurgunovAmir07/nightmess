import { useActions, useCraftCardMutation, useTypedSelector } from '@/store'
import cl from './CraftCardButton.module.scss'
import { LoaderSpinner } from '@/shared'

export const CraftCardButton = () => {
	const { updateCraftState } = useActions()
	const choosedCard = useTypedSelector(
		state => state.inventorySlice.choosedCard
	)
	const count = useTypedSelector(
		state => state.inventorySlice.counterQuantity
	)

	const [craftCard, { isLoading }] = useCraftCardMutation()

	if (isLoading) return <LoaderSpinner />

	const handleCraft = () => {
		if (choosedCard) {
			const craftData = {
				color: choosedCard.card.color,
				count: count
			}
			updateCraftState(craftData)
			craftCard(craftData)
		}
	}

	return (
		<button onClick={handleCraft} className={cl.root}>
			<span className={cl.root_text}>КРАФТ</span>
		</button>
	)
}
