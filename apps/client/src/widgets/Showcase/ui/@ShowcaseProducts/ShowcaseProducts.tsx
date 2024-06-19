import { useCart } from '@/store'
import cl from './ShowcaseProducts.module.scss'
import { Product } from '@/entities/Product'
import type { Key } from 'react'

export const ShowcaseProducts = () => {
	const { cart } = useCart()

	return (
		<div className={`${cl.root} ${cart.length === 0 && cl.root_empty}`}>
			{cart.length > 0 ? (
				cart.map(
					(
						item: {
							product: {
								name: string
								id: number
								img: string
							}
						},
						index: Key
					) => (
						<Product
							key={index}
							isShowCase
							name={item.product.name}
							id={item.product.id}
							icon={item.product.img}
						/>
					)
				)
			) : (
				<h2 className={cl.root_text}>ВЫ НИЧЕГО НЕ ЗАКАЗЫВАЛИ</h2>
			)}
		</div>
	)
}
