import { useActions, useCart } from '@/store'
import { CartProduct } from '../@CartProduct/CartProduct'
import cl from './CartProductsList.module.scss'
import { DeleteFromCartButton } from '@/features/DeleteFromCart'

export const CartProductsList = () => {
	const { changeQuantity } = useActions()
	const { cart } = useCart()

	return (
		<div className={cl.root}>
			{cart.length === 0 ? (
				<h2 className={cl.root__title}>
					Корзина пуста :( <br />
					вы можете исправить это выбрав товар в магазине :D
				</h2>
			) : (
				cart.map((item, index) => (
					<div className={cl.root__item} key={index}>
						<div className={cl.root__item_container}>
							<CartProduct
								key={item.product.name}
								name={item.product.name}
								price={item.product.price}
								img={item.product.img}
								quantity={item.quantity}
								minus={() =>
									changeQuantity({
										id: item.id,
										type: 'minus'
									})
								}
								plus={() =>
									changeQuantity({
										id: item.id,
										type: 'plus'
									})
								}
							/>
							<DeleteFromCartButton id={item.product.id} />
						</div>
					</div>
				))
			)}
		</div>
	)
}
