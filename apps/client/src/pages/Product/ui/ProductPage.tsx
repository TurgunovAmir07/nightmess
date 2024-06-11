import { Link, useParams } from 'react-router-dom'
import { productsData, Container, GameButton } from '@/shared'
import { Product } from '@/widgets/Product'
import cl from './ProductsPage.module.scss'
import { useCart, useActions } from '@/store'

export const ProductPage = () => {
	// вынести логику в виджет или фичу
	const { id } = useParams()

	const product = productsData.find(item => item.id === Number(id))

	const { addToCart } = useActions()

	const { cart } = useCart()

	return (
		<Container>
			<div className={cl.root}>
				{product && (
					<>
						<Product
							id={product.id}
							name={product.name}
							Icon={product.img}
							price={product.price}
						/>
						<div className={cl.root__btn}>
							<GameButton
								noIcon
								text={
									cart.find(
										// @ts-expect-error FIX
										item => item.product.id === product.id
									)
										? 'Добавлено'
										: 'В корзину'
								}
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
					</>
				)}
				<div
					style={{
						display: 'flex',
						gap: '10px',
						flexDirection: 'column'
					}}
				>
					<Link to='/'>главная</Link>
					<Link to='/profile'>профиль</Link>
				</div>
			</div>
		</Container>
	)
}
