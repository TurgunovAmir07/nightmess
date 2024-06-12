import { GameInput, Container } from '@/shared'
import { Showcase } from '@/widgets/Showcase'
import cl from './ProfilePage.module.scss'
import { Outlet } from 'react-router-dom'
import { HomeButton } from '@/features/HomeButton'
import { SettingsButton } from '@/features/SettingButton'
import { CartButton } from '@/features/CartButton'
import { OAuthTelegram } from '@/features/OAuthTelegramPopup'
import { OAuthGoogle } from '@/features/OAuthGooglePopup'
import { Auth } from '@/features/AuthPopup'
import { OAuthVkPopup } from '@/features/OAuthVkPopup'

export const ProfilePage = () => {
	return (
		<Container>
			<div className={cl.root}>
				<Outlet />

				<div className={cl.root__content}>
					<HomeButton />

					<SettingsButton />

					<CartButton />

					<GameInput />

					<div className={cl.root__content__buttons}>
						<OAuthTelegram />
						<OAuthGoogle />
						<Auth />
						<OAuthVkPopup />
					</div>

					<Showcase count={1} />
				</div>
			</div>
		</Container>
	)
}
