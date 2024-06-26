import cl from './StarsList.module.scss'

export const StarsList = ({ count }: { count: number }) => {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<img
					key={index}
					draggable={false}
					className={cl.root}
					src='/icon-star.png'
					alt='star'
				/>
			))}
		</>
	)
}
