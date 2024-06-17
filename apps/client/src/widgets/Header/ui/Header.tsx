import cl from './Header.module.scss'
import { GoToMapPageButton } from '@/features/GoToMapPage'
import { GoToGamePageButton } from '@/features/GoToGamePage'
import { GoToProfilePageButton } from '@/features/GoToProfilePage'
import { CartButton } from '@/features/OpenCart'

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
				{isMap ? <GoToGamePageButton /> : <GoToMapPageButton />}
				<h1 className={cl.root__header__title}>{title}</h1>
				<GoToProfilePageButton />
			</div>
			<CartButton removeTop />
		</div>
	)
}
