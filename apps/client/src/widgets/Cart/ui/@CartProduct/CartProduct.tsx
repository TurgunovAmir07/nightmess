import { CartProductCounter } from '../@CartProductCounter/CartProductCounter'
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
				<CartProductCounter
					quantity={quantity}
					minus={minus}
					plus={plus}
				/>
			</div>
			<div className={cl.root__price}>{price} руб</div>
		</div>
	)
}
