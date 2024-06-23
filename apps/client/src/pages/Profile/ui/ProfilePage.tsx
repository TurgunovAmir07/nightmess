import { GameButton, Input } from '@/shared'
import { Showcase } from '@/widgets/Showcase'
import cl from './ProfilePage.module.scss'
import { GoToMainPageButton } from '@/features/GoToMainPage'
import { CartButton } from '@/features/OpenCart'
import { SettingsButton } from '@/features/OpenSettings'
import { ActivationButtonsFrame } from '@/widgets/ActivationButtonsFrame'
import { useTypedSelector } from '@/store'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
	const isAuth = useTypedSelector(state => state.authSlice.isAuth)
	const name = useTypedSelector(state => state.authSlice.user?.name)

	return (
		<div className={cl.root}>
			<div className={cl.root__content}>
				<GoToMainPageButton />

				<SettingsButton />

				<CartButton />

				<div className={cl.root__content_input}>
					{isAuth ? (
						<Input value={name} variant='game' />
					) : (
						<Link to={import.meta.env.VITE_BOT_URL}>
							<GameButton
								src='/icon-telegram.png'
								alt='telegram'
								text='Войти'
								type='secondary'
								size='middle'
								htmlType='button'
							/>
						</Link>
					)}
				</div>

				<div className={cl.root__content__buttons}>
					<ActivationButtonsFrame isAuth={isAuth} />
				</div>

				<Showcase count={1} />
			</div>
		</div>
	)
}

export default ProfilePage
