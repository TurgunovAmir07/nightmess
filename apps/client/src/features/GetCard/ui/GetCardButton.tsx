import { gameApi, useTypedDispatch } from '@/store'
import cl from './GetCardButton.module.scss'

export const GetCardButton = () => {
	const dispatch = useTypedDispatch()

	const handleGetCard = async () => {
		try {
			const result = await dispatch(gameApi.endpoints.getCard.initiate())
			if (result) {
				dispatch(gameApi.util.invalidateTags(['Inventory']))
			}
		} catch (error) {
			console.error('Failed to fetch card:', error)
		}
	}

	return (
		<div className={cl.root}>
			<button onClick={handleGetCard} className={cl.root__btn}>
				<span className={cl.root__btn_text}>GET</span>
			</button>
		</div>
	)
}
