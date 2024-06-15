import { Container } from '@/shared'
import { CardSlider } from '@/widgets/CardSlider'
import cl from './GamePage.module.scss'
import { Points } from '@/widgets/Points'

import { Stars } from '@/widgets/Stars'
import { Skills } from '@/widgets/Skills'
import { Outlet } from 'react-router-dom'
import { CartButton } from '@/features/OpenCart'
import { InventoryButton } from '@/features/InventoryButton'
import { CraftButton } from '@/features/CraftButton'
import { ShopButton } from '@/features/ShopButton'
import { GoToMainPageButton } from '@/features/GoToMainPageButton'

const GamePage = () => {
	return (
		<Container>
			<Outlet />
			<div className={cl.root}>
				<span className={cl.root__moon}>
					<img
						className={cl.root__moon_img}
						src='/illustration-moon.png'
						alt='moon'
					/>
				</span>
				<GoToMainPageButton />
				<Points />
				<CartButton />
				<Stars count={1} />
				<CardSlider />
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

export default GamePage
