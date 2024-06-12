import cl from './CartProductCounter.module.scss'

export const CartProductCounter = ({
	quantity,
	minus,
	plus
}: {
	quantity: number
	minus: () => void
	plus: () => void
}) => {
	return (
		<div className={cl.root}>
			<button
				disabled={quantity === 1}
				onClick={minus}
				className={`${cl.root__btn} ${
					quantity === 1 && cl.root__btn__disabled
				}`}
				type='button'
			>
				<img
					className={cl.root__btn_img}
					src='/MINUS.png'
					alt='minus'
				/>
			</button>
			{quantity}
			<button onClick={plus} className={cl.root__btn} type='button'>
				<img className={cl.root__btn_img} src='/PLUS.png' alt='plus' />
			</button>
		</div>
	)
}
