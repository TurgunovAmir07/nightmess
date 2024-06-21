import { useActions, useTypedSelector } from '@/store'
import cl from './ChangeCraftQuantity.module.scss'
import { useEffect, useState } from 'react'

export const ChangeCraftQuantity = () => {
	const count = useTypedSelector(
		state => state.inventorySlice.counterQuantity
	)

	const choosedCard = useTypedSelector(
		state => state.inventorySlice.choosedCard
	)

	const [isDisabled, setIsDisabled] = useState<boolean>(false)

	const { changeCounterQuantity } = useActions()

	useEffect(() => {
		if (
			(choosedCard && choosedCard.count <= 9) ||
			(choosedCard && choosedCard.count === 9) ||
			(choosedCard && (choosedCard.count * count) % 2 === 0)
		) {
			setIsDisabled(true)
		} else {
			setIsDisabled(false)
		}
	}, [choosedCard, count])

	return (
		<div className={cl.root}>
			<div className={cl.root__counter}>
				<button
					onClick={() => changeCounterQuantity('minus')}
					disabled={count === 1}
					className={`${cl.root__counter__btn} ${
						count === 1 && cl.root__counter__btn_disabled
					}`}
					type='button'
				>
					<img
						className={cl.root__counter__btn_img}
						src='/button-minus.png'
						alt='minus'
					/>
				</button>
				<span className={cl.root__counter__count}>{count}</span>
				<button
					onClick={() => changeCounterQuantity('plus')}
					type='button'
					disabled={isDisabled}
					className={`${cl.root__counter__btn} ${
						isDisabled && cl.root__counter__btn_disabled
					}`}
				>
					<img
						className={cl.root__counter__btn_img}
						src='/button-plus.png'
						alt='plus'
					/>
				</button>
			</div>
		</div>
	)
}
