import cl from './MiniInventoryItem.module.scss'
import { MiniInventoryItemBage } from '../@MiniInventoryItemBage/MiniInventoryItemBage'

export const MiniInventoryItem = ({
	count,
	src,
	alt,
	isActive,
	onClick
}: {
	count: number | null
	src: string | null
	alt: string | ''
	isActive: boolean
	onClick: () => void
}) => {
	return (
		<div
			onClick={onClick}
			className={`${cl.root} ${!src && cl.root__emptyFrame}`}
		>
			{src ? (
				<>
					<img
						onClick={onClick}
						draggable={false}
						className={`${cl.root__skill} ${
							isActive && cl.root__skill_active
						}`}
						src={`${import.meta.env.VITE_SERVER_STATIC_URL}/${src}`}
						alt={alt}
					/>
					<MiniInventoryItemBage count={count ? count : 0} />
				</>
			) : (
				<img
					draggable={false}
					className={cl.root__empty}
					src='/icon-lock.png'
					alt='empty'
				/>
			)}
		</div>
	)
}
