import { CardSlider } from '@/widgets/CardSlider'
import cl from './GamePage.module.scss'
import { Points } from '@/widgets/Points'

import { Stars } from '@/widgets/Stars'
import { CartButton } from '@/features/OpenCart'
import { GetCardButton } from '@/features/GetCard'
import { GoToMainPageButton } from '@/features/GoToMainPage'
import { OpenShopButton } from '@/features/OpenShop'
import { OpenCaseStoreButton } from '@/features/OpenCaseStore'
import { MiniInventory } from '@/widgets/MiniInventory'

const GamePage = () => {
	return (
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
			<MiniInventory />
			<div className={cl.root__footer}>
				<div className={cl.root__footer_button}>
					<OpenCaseStoreButton />
				</div>
				<div className={cl.root__footer_button}>
					<GetCardButton />
				</div>
				<div className={cl.root__footer_button}>
					<OpenShopButton />
				</div>
			</div>
		</div>
	)
}

export default GamePage
