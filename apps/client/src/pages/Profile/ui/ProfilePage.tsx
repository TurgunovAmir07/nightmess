import { GameInput } from '@/shared'
import { Showcase } from '@/widgets/Showcase'
import cl from './ProfilePage.module.scss'
import { GoToMainPageButton } from '@/features/GoToMainPageButton'
import { CartButton } from '@/features/OpenCart'
import { SettingsButton } from '@/features/OpenSettings'
import { OAuthFrame } from '@/widgets/OAuthFrame'

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
					<OAuthFrame />
				</div>

				<Showcase count={1} />
			</div>
		</div>
	)
}

export default ProfilePage
