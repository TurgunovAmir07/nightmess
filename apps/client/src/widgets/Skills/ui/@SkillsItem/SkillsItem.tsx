import cl from './SkillsItem.module.scss'

export const SkillsItem = ({
	count,
	isEmpty
}: {
	count?: number
	isEmpty: boolean
}) => {
	return (
		<div className={`${cl.root} ${isEmpty ? cl.root__emptyFrame : ''}`}>
			{!isEmpty ? (
				<>
					<img
						className={cl.root__skill}
						src='/icon-inventory-item.png'
						alt='empty'
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
