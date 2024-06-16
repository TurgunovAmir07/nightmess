import { cardApi, useTypedDispatch } from '@/store'
import cl from './CraftButton.module.scss'

export const CraftButton = () => {
	const dispatch = useTypedDispatch()

	const handleGetCard = async () => {
		try {
			const result = await dispatch(cardApi.endpoints.getCard.initiate())
			console.log(result)
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
