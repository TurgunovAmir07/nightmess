import cl from './Header.module.scss'
import { GoToMapPageButton } from '@/features/GoToMapPageButton'
import { GoToGamePageButton } from '@/features/GoToGamePageButton'
import { GoToProfilePageButton } from '@/features/GoToProfilePageButton'
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
