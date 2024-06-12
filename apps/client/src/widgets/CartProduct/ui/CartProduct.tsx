import cl from './CartProduct.module.scss'

export const CartProduct = ({
	name,
	price,
	img,
	quantity,
	minus,
	plus
}: {
	name: string
	price: number
	img: string
	quantity: number
	minus: () => void
	plus: () => void
}) => {
	return (
		<div className={cl.root}>
			<img className={cl.root__img} src={img} alt={name} />
			<div className={cl.root__info}>
				<div className={cl.root__info__wrapper}>
					<div className={cl.root__info__wrapper__name}>{name}</div>
					<div className={cl.root__info__wrapper__size}>
						Размер XL
					</div>
				</div>
				<div className={cl.root__info__quontity}>
					<button
						disabled={quantity === 1}
						onClick={minus}
						className={`${cl.root__info__quontity__btn} ${
							quantity === 1 &&
							cl.root__info__quontity__btn__disabled
						}`}
						type='button'
					>
						<img
							className={cl.root__info__quontity__btn_img}
							src='/MINUS.png'
							alt='minus'
						/>
					</button>
					{quantity}
					<button
						onClick={plus}
						className={cl.root__info__quontity__btn}
						type='button'
					>
						<img
							className={cl.root__info__quontity__btn_img}
							src='/PLUS.png'
							alt='plus'
						/>
					</button>
				</div>
			</div>
			<div className={cl.root__price}>{price} руб</div>
		</div>
	)
}
