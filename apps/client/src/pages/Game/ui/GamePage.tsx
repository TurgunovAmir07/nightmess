import { CardSlider } from '@/widgets/CardSlider'
import cl from './GamePage.module.scss'
import { Points } from '@/widgets/Points'

import { CartButton } from '@/features/OpenCart'
import { GetCardButton } from '@/features/GetCard'
import { GoToMainPageButton } from '@/features/GoToMainPage'
import { OpenShopButton } from '@/features/OpenShop'
import { OpenCaseStoreButton } from '@/features/OpenCaseStore'
import { useTypedSelector } from '@/store'

const GamePage = () => {
	const user = useTypedSelector(state => state.authSlice.user)

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
			{user && user.isHasTelegram ? (
				<>
					<CardSlider />
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
				</>
			) : (
				<div className={cl.root__noAuth}>
					<img
						draggable={false}
						className={cl.root__noAuth_img}
						src='/illustration-card-non-auth.png'
						alt='non-auth-card'
					/>
				</div>
			)}
		</div>
	)
}

export default GamePage
