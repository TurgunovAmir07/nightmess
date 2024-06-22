import { gameApi, useLazyCheckStatusQuery, useTypedDispatch } from '@/store'
import cl from './GetCardButton.module.scss'
import { useEffect } from 'react'

export const GetCardButton = () => {
	const [trigger, { data }] = useLazyCheckStatusQuery()
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

	useEffect(() => {
		const intervalId = setInterval(() => {
			trigger()
		}, 15000)

		return () => clearInterval(intervalId)
	}, [trigger, data])

	return (
		<div className={cl.root}>
			<button
				onClick={handleGetCard}
				className={`${cl.root__btn} ${
					data && data.result === false && cl.root__btn_disabled
				}`}
				disabled={data && data.result === false}
			>
				<span className={cl.root__btn_text}>GET</span>
			</button>
		</div>
	)
}
