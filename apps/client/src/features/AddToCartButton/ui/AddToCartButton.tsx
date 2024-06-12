import { useParams } from 'react-router-dom'
import cl from './AddToCartButton.module.scss'
import { useActions, useCart } from '@/store'
import { GameButton, productsData } from '@/shared'
import { useMemo } from 'react'

export const AddToCartButton = () => {
	const { id } = useParams()
	const { addToCart } = useActions()
	const { cart } = useCart()

	const product = useMemo(() => {
		return productsData.find(item => item.id === Number(id))
	}, [id])

	if (!product) return null

	const isInCart = cart.some(item => item.product.id === product.id)

	return (
		<div className={cl.root}>
			<GameButton
				noIcon
				text={isInCart ? 'Добавлено' : 'В корзину'}
				onCLick={() =>
					addToCart({
						product: {
							id: product.id,
							name: product.name,
							price: product.price,
							img: product.img
						},
						quantity: 1
					})
				}
			/>
		</div>
	)
}
