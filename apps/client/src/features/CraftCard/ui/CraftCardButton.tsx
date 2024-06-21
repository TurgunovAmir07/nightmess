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

	const dispatch = useTypedDispatch()

	const [craftCard, { isLoading }] = useCraftCardMutation()

	if (isLoading) return <LoaderSpinner />

	const handleCraft = async () => {
		if (choosedCard) {
			const craftData = {
				color: choosedCard.card.color,
				count: count
			}
			craftCard(craftData)
			dispatch(gameApi.util.invalidateTags(['Inventory']))
			const result = await craftCard(craftData).unwrap()
			getCraftState(result)
		}
	}

	return (
		<button onClick={handleCraft} className={cl.root}>
			<span className={cl.root_text}>КРАФТ</span>
		</button>
	)
}
