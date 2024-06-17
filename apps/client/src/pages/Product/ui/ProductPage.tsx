import { Link } from 'react-router-dom'
import { Container } from '@/shared'
import cl from './ProductsPage.module.scss'
import { ProductDetails } from '@/widgets/ProductDetails'
import { AddToCartButton } from '@/features/AddToCartButton'
import { GameInput } from '@/shared/ui/input/@GameInput/GameInput'

const ProductPage = () => {
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
					<Link to='/main'>главная</Link>
					<Link to='/profile'>профиль</Link>
				</div>
				<br />
				<br />
				<GameInput size='small' />
				<br />
				<br />
				<GameInput size='middle' />
				<br />
				<br />
				<GameInput size='large' />
				<br />
				<br />
			</div>
		</Container>
	)
}

export default ProductPage
