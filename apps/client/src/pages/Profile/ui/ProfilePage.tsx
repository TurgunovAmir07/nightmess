import {
	HomeButton,
	SettingsButton,
	CartButton,
	OAuthTelegram,
	OAuthVkPopup,
	Auth,
	OAuthGoogle
} from '@/features'
import { GameInput, Container } from '@/shared'
import { Showcase } from '@/widgets/Showcase'
import cl from './ProfilePage.module.scss'
import { Outlet } from 'react-router-dom'

export const ProfilePage = () => {
	// вынести, использовать компонент Outlet

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
