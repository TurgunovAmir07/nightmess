import { Input } from '@/shared'
import { Showcase } from '@/widgets/Showcase'
import cl from './ProfilePage.module.scss'
import { GoToMainPageButton } from '@/features/GoToMainPage'
import { CartButton } from '@/features/OpenCart'
import { SettingsButton } from '@/features/OpenSettings'
import { ActivationButtonsFrame } from '@/widgets/ActivationButtonsFrame'

const ProfilePage = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__content}>
				<GoToMainPageButton />

				<SettingsButton />

				<CartButton />

				<div className={cl.root__content_input}>
					<Input variant='game' />
				</div>

				<div className={cl.root__content__buttons}>
					<ActivationButtonsFrame />
				</div>

				<Showcase count={1} />
			</div>
		</div>
	)
}

export default ProfilePage
