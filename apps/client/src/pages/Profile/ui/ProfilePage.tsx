import { useState } from 'react'
import {
	HomeButton,
	SettingsButton,
	CartButton,
	OAuthTelegram,
	OAuthVkPopup,
	Auth,
	OAuthGoogle
} from '../../../features'
import { GameInput, Container } from '../../../shared'
import { Showcase } from '../../../widgets/Showcase'
import { Topbar } from '../../../widgets/Topbar'
import cl from './ProfilePage.module.scss'

export const ProfilePage = () => {
	// вынести, использовать компонент Outlet

	const [profile, setProfile] = useState(true)
	const [game, setGame] = useState(false)

	const handleProfile = () => {
		setGame(false)
		setProfile(true)
	}

	const handleGame = () => {
		setProfile(false)
		setGame(true)
	}

	return (
		<Container>
			<div className={cl.root}>
				<Topbar
					profile={profile}
					game={game}
					handleProfile={handleProfile}
					handleGame={handleGame}
				/>

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
