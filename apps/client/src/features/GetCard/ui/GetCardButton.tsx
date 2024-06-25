import {
	gameApi,
	useLazyCheckStatusQuery,
	useTypedDispatch,
	useTypedSelector
} from '@/store'
import cl from './GetCardButton.module.scss'
import { useEffect } from 'react'

export const GetCardButton = () => {
	const [trigger, { data }] = useLazyCheckStatusQuery()
	const dispatch = useTypedDispatch()

	const user = useTypedSelector(state => state.authSlice.user)

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
		let intervalId: NodeJS.Timeout

		if (user && user?.isHasTelegram === true) {
			intervalId = setInterval(() => {
				trigger()
			}, 15000)
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId)
			}
		}
	}, [trigger, user])

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
