import { useActions, useTypedSelector } from '@/store'
import cl from './ChangeCraftQuantity.module.scss'

export const ChangeCraftQuantity = () => {
	const count = useTypedSelector(
		state => state.inventorySlice.counterQuantity
	)

	const { changeCounterQuantity } = useActions()

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
					className={cl.root__counter__btn}
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