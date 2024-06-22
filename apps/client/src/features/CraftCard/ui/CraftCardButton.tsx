import {
	gameApi,
	useActions,
	useCraftCardMutation,
	useTypedDispatch,
	useTypedSelector
} from '@/store'
import cl from './CraftCardButton.module.scss'
import { LoaderSpinner } from '@/shared'
import { useEffect, useState } from 'react'

export const CraftCardButton = () => {
	const { getCraftState } = useActions()
	const choosedCard = useTypedSelector(
		state => state.inventorySlice.choosedCard
	)
	const count = useTypedSelector(
		state => state.inventorySlice.counterQuantity
	)

	useEffect(() => {
		const updateIsDisabled = () => {
			if (
				(choosedCard && choosedCard.count < 9) ||
				(choosedCard && 9 * count > choosedCard.count)
			) {
				setIsDisabled(true)
			} else {
				setIsDisabled(false)
			}
		}

		updateIsDisabled()
	}, [choosedCard, count])

	const [isDisabled, setIsDisabled] = useState<boolean>(false)

	const { toggleCardsActiveState, chooseCard } = useActions()

	const dispatch = useTypedDispatch()

	const [craftCard, { isLoading }] = useCraftCardMutation()

	if (isLoading) return <LoaderSpinner />

	const handleCraft = async () => {
		if (choosedCard) {
			const craftData = {
				color: choosedCard.card.color,
				count: count
			}
			const result = await craftCard(craftData).unwrap()
			dispatch(gameApi.util.invalidateTags(['Inventory']))
			toggleCardsActiveState()
			chooseCard({ id: null })
			getCraftState({
				cards: result.cards,
				message: result.message
			})
			const timeoutId = setTimeout(() => {
				getCraftState({
					cards: [],
					message: ''
				})
			}, 2000)

			return () => clearTimeout(timeoutId)
		}
	}

	return (
		<button
			disabled={isDisabled}
			onClick={handleCraft}
			className={`${cl.root} ${isDisabled && cl.root_disabled}`}
		>
			<span className={cl.root_text}>КРАФТ</span>
		</button>
	)
}
