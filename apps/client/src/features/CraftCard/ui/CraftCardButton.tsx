import {
	gameApi,
	useActions,
	useCraftCardMutation,
	useTypedDispatch,
	useTypedSelector
} from '@/store'
import cl from './CraftCardButton.module.scss'
import { LoaderSpinner } from '@/shared'

export const CraftCardButton = () => {
	const { getCraftState } = useActions()
	const choosedCard = useTypedSelector(
		state => state.inventorySlice.choosedCard
	)
	const count = useTypedSelector(
		state => state.inventorySlice.counterQuantity
	)

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
			console.log(result)
			getCraftState({
				cards: result.cards,
				message: result.message
			})

			setTimeout(() => {
				getCraftState({
					cards: [],
					message: ''
				})
			}, 2000)

			return
		}
	}

	return (
		<button onClick={handleCraft} className={cl.root}>
			<span className={cl.root_text}>КРАФТ</span>
		</button>
	)
}
