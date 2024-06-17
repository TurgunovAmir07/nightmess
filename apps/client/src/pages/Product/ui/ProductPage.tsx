import { Link } from 'react-router-dom'
import { Container, GameButton } from '@/shared'
import cl from './ProductsPage.module.scss'
import { ProductDetails } from '@/widgets/ProductDetails'
import { AddToCartButton } from '@/features/AddToCartButton'

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
				<GameButton
					type='secondary'
					htmlType='submit'
					size='small'
					src='/icon-google.png'
					alt='google'
					text='ПОЛУЧИТЬ'
				/>
				<br />
				<br />
				<GameButton
					type='secondary'
					htmlType='submit'
					size='middle'
					src='/icon-google.png'
					alt='google'
					text='ПОЛУЧИТЬ'
				/>
				<br />
				<br />
				<GameButton
					type='secondary'
					htmlType='submit'
					size='large'
					src='/icon-google.png'
					alt='google'
					text='ПОЛУЧИТЬ'
				/>
				<br />
				<br />
				<GameButton
					type='primary'
					htmlType='submit'
					size='small'
					src='/icon-mark.png'
					alt='mark'
					text='ЗАКАЗАТЬ'
				/>
				<br />
				<br />
				<GameButton
					type='primary'
					htmlType='submit'
					size='middle'
					src='/icon-mark.png'
					alt='mark'
					text='ЗАКАЗАТЬ'
				/>
				<br />
				<br />
				<GameButton
					type='primary'
					htmlType='submit'
					size='large'
					src='/icon-mark.png'
					alt='mark'
					text='ЗАКАЗАТЬ'
				/>
				<br />
				<br />
			</div>
		</Container>
	)
}

export default ProductPage
