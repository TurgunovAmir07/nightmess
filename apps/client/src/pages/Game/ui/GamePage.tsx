import { CardSlider } from '@/widgets/CardSlider'
import cl from './GamePage.module.scss'
import { Points } from '@/widgets/Points'

import { Stars } from '@/widgets/Stars'
import { Skills } from '@/widgets/Skills'
import { CartButton } from '@/features/OpenCart'
import { CraftButton } from '@/features/CraftButton'
import { GoToMainPageButton } from '@/features/GoToMainPageButton'
import { OpenShopButton } from '@/features/OpenShop'
import { OpenCaseStoreButton } from '@/features/OpenCaseStore'

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
			<Skills />
			<div className={cl.root__footer}>
				<div className={cl.root__footer_button}>
					<OpenCaseStoreButton />
				</div>
				<div className={cl.root__footer_button}>
					<CraftButton />
				</div>
				<div className={cl.root__footer_button}>
					<OpenShopButton />
				</div>
			</div>
		</div>
	)
}

export default GamePage
