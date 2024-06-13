import cl from './Stars.module.scss'

export const Stars = ({ count }: { count: number }) => {
	return (
		<div className={cl.root}>
			<div className={cl.root__wrap}>
				<img
					draggable={false}
					className={cl.root__wrap_img}
					src='/illustration-rating.png'
					alt='stars-back'
				/>
				{Array.from({ length: count }).map((_, index) => (
					<img
						key={index}
						draggable={false}
						className={cl.root__wrap_star}
						src='/icon-star.png'
						alt='star'
					/>
				))}
				<img
					draggable={false}
					className={cl.root__wrap_text}
					src='/illustration-rating-text.png'
					alt='stars-text'
				/>
			</div>
		</div>
	)
}
