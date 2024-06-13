import { Container } from '@/shared'
import { Header } from '@/widgets/Header'
import { Product } from '@/widgets/Product'
import cl from './MainPage.module.scss'
import { productsData } from '@/shared'
import { Link } from 'react-router-dom'

export const MainPage = () => {
	return (
		<Container>
			<div className={cl.root}>
				<Header title='NIGHTMESS' />
				<div className={cl.root__products}>
					<div className={cl.root__products__items}>
						{productsData.map(item => (
							<Product
								id={item.id}
								key={item.name}
								name={item.name}
								icon={item.img}
							/>
						))}
					</div>
				</div>
				<div className={cl.root__footer}>
					<button className={cl.root__footer_btn}>
						<Link to='/info' className={cl.root__footer_btn_link}>
							INFO
						</Link>
					</button>
				</div>
			</div>
		</Container>
	)
}
