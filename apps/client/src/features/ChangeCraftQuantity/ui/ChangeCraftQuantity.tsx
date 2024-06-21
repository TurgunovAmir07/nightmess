import { useActions, useTypedSelector } from '@/store'
import cl from './ChangeCraftQuantity.module.scss'

export const ChangeCraftQuantity = () => {
	const count = useTypedSelector(
		state => state.inventorySlice.counterQuantity
	)

	// eslint-disable-next-line
	// @ts-ignore
	const { changeCounterQuantity, choosedCard } = useActions()

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
					disabled={
						choosedCard &&
						(choosedCard.count * count) / choosedCard.count === 9
					}
					className={`${cl.root__counter__btn} ${
						choosedCard &&
						(choosedCard.count * count) / choosedCard.count === 9 &&
						cl.root__counter__btn_disabled
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
