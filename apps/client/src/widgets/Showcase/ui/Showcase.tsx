import type { Key } from 'react'
import { OrderStatus } from '@/features/OrderStatus'
import { useCart } from '@/store'
import { Product } from '@/widgets/Product'
import cl from './Showcase.module.scss'

export const Showcase = ({ count }: { count: number }) => {
	const { cart } = useCart()

	return (
		<div className={cl.root}>
			<div className={cl.root__content}>
				<div className={cl.root__content__header}>
					<h2 className={cl.root__content__header_title}>
						ЗАКАЗ #{count}
					</h2>
				</div>
				<div className={cl.root__content__main}>
					<h2 className={cl.root__content__main_text}>СТАТУС</h2>
					<OrderStatus />
					<h2 className={cl.root__content__main_text}>ТОВАРЫ:</h2>
					<div
						className={`${cl.root__content__main__products} ${
							cart.length === 0 &&
							cl.root__content__main__products_empty
						}`}
					>
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
							<h2 className={cl.root__content__main_text}>
								ВЫ НИЧЕГО НЕ ЗАКАЗЫВАЛИ
							</h2>
						)}
					</div>
				</div>
				<div className={cl.root__content__footer} />
			</div>
		</div>
	)
}
