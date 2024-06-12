import { Link } from 'react-router-dom'
import { Container } from '@/shared'
import cl from './ProductsPage.module.scss'
import { ProductDetails } from '@/widgets/ProductDetails'
import { AddToCartButton } from '@/features/AddToCartButton'

export const ProductPage = () => {
	return (
		<Container>
			<div className={cl.root}>
				<>
					<ProductDetails />
					<div className={cl.root__btn}>
						<AddToCartButton />
					</div>
				</>
				<div className={cl.root_links}>
					<Link to='/'>главная</Link>
					<Link to='/profile'>профиль</Link>
				</div>
			</div>
		</Container>
	)
}
