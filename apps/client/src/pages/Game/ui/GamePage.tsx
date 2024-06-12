import { Container } from '@/shared'
import { Swiper } from '@/widgets/Swiper'
import cl from './GamePage.module.scss'
import { Points } from '@/widgets/Points'
import {
	CartButton,
	CraftButton,
	HomeButton,
	InventoryButton,
	ShopButton
} from '@/features'
import { Stars } from '@/widgets/Stars'
import { Skills } from '@/widgets/Skills'
import { Outlet } from 'react-router-dom'

export const GamePage = () => {
	// use outlet component

	return (
		<Container>
			<Outlet />
			<div className={cl.root}>
				<span className={cl.root__moon}>
					<img
						className={cl.root__moon_img}
						src='/MOON.png'
						alt='moon'
					/>
				</span>
				<HomeButton />
				<Points />
				<CartButton />
				<Stars count={1} />
				<Swiper />
				<Skills />
				<div className={cl.root__footer}>
					<div className={cl.root__footer_button}>
						<InventoryButton />
					</div>
					<div className={cl.root__footer_button}>
						<CraftButton />
					</div>
					<div className={cl.root__footer_button}>
						<ShopButton />
					</div>
				</div>
			</div>
		</Container>
	)
}
