import { GameInput } from '@/shared'
import { Showcase } from '@/widgets/Showcase'
import cl from './ProfilePage.module.scss'
import { OAuthTelegram } from '@/features/OAuthTelegramPopup'
import { OAuthGoogle } from '@/features/OAuthGooglePopup'
import { Auth } from '@/features/AuthPopup'
import { OAuthVkPopup } from '@/features/OAuthVkPopup'
import { GoToMainPageButton } from '@/features/GoToMainPageButton'
import { CartButton } from '@/features/OpenCart'
import { SettingsButton } from '@/features/OpenSettings'

const ProfilePage = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__content}>
				<GoToMainPageButton />

				<SettingsButton />

				<CartButton />

				<div className={cl.root__content_input}>
					<GameInput />
				</div>

				<div className={cl.root__content__buttons}>
					<OAuthTelegram />
					<OAuthGoogle />
					<Auth />
					<OAuthVkPopup />
				</div>

				<Showcase count={1} />
			</div>
		</div>
	)
}

export default ProfilePage
