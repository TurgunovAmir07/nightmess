import cl from './MiniInventoryItem.module.scss'

export const MiniInventoryItem = ({
	count,
	src,
	alt
}: {
	count: number | null
	src: string | null
	alt: string | ''
}) => {
	return (
		<div className={`${cl.root} ${!src ? cl.root__emptyFrame : ''}`}>
			{src ? (
				<>
					<img
						draggable={false}
						className={cl.root__skill}
						src={`${import.meta.env.VITE_SERVER_STATIC_URL}/${src}`}
						alt={alt}
					/>
					<div className={cl.root__bage}>
						<img
							draggable={false}
							className={cl.root__bage_img}
							src='/icon-bage.png'
							alt='bage'
						/>
						<span className={cl.root__bage_count}>{count}</span>
					</div>
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
