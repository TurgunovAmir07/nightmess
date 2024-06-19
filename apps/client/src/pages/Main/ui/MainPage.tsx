import { Container } from '@/shared'
import { Header } from '@/widgets/Header'
import cl from './MainPage.module.scss'
import { productsData } from '@/shared'
import { Link } from 'react-router-dom'
import { LogoutButton } from '@/features/LogoutButton'
import { Product } from '@/entities/Product'

const MainPage = () => {
	return (
		<Container>
			<div className={cl.root}>
				<LogoutButton />
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
					<Link to='/info' className={cl.root__footer_link}>
						INFO
					</Link>
				</div>
			</div>
		</Container>
	)
}

export default MainPage
