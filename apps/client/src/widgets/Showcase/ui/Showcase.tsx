import { OrderStatus } from '@/features/OrderStatus'
import cl from './Showcase.module.scss'
import { ShowcaseProducts } from './@ShowcaseProducts/ShowcaseProducts'

export const Showcase = ({ count }: { count: number }) => {
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
					<ShowcaseProducts />
				</div>
				<div className={cl.root__content__footer} />
			</div>
		</div>
	)
}
