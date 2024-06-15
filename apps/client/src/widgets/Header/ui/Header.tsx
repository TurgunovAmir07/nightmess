import cl from './Header.module.scss'
import { ProfileAuthButton } from '@/features/ProfileAuthButton'
import { CartButton } from '@/features/CartButton'
import { GamepadButton } from '@/features/GamepadButton'
import { GoToMapPageButton } from '@/features/GoToMapPageButton'

export const Header = ({
	title,
	isMap
}: {
	title: string
	isMap?: boolean
}) => {
	return (
		<div className={cl.root}>
			<div className={cl.root__header}>
				{isMap ? <GamepadButton /> : <GoToMapPageButton />}
				<h1 className={cl.root__header__title}>{title}</h1>
				<ProfileAuthButton />
			</div>
			<CartButton removeTop />
		</div>
	)
}
