import { Link } from 'react-router-dom'
import { Container } from '@/shared'
import cl from './ProductsPage.module.scss'
import { ProductDetails } from '@/widgets/ProductDetails'
import { AddToCartButton } from '@/features/AddToCart'
import { CraftPopup } from '@/widgets/CraftPopup'
import { useState } from 'react'

const ProductPage = () => {
	const [isOpen, setIsOpen] = useState(false)

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
			</div>
			<br />
			<br />
			<br />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<CraftPopup isOpen={isOpen} setIsOpen={setIsOpen} />
				<button onClick={() => setIsOpen(true)}>open</button>
			</div>
			<br />
			<br />
			<br />
		</Container>
	)
}

export default ProductPage
