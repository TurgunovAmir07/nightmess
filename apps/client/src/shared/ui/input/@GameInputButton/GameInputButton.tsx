import cl from './GameInputButton.module.scss'

export const GameInputButton = ({
	size
}: {
	size: 'large' | 'middle' | 'small'
}) => {
	switch (size) {
		case 'small':
			return (
				<button className={cl.root}>
					<img
						className={cl.root__img}
						src='/icon-pen.png'
						alt='pen'
					/>
				</button>
			)
		case 'middle':
			return (
				<button className={`${cl.root} ${cl.root_middle}`}>
					<img
						className={`${cl.root__img} ${cl.root__img_middle}`}
						src='/icon-pen.png'
						alt='pen'
					/>
				</button>
			)

		case 'large':
			return (
				<button className={`${cl.root} ${cl.root_large}`}>
					<img
						className={`${cl.root__img} ${cl.root__img_large}`}
						src='/icon-pen.png'
						alt='pen'
					/>
				</button>
			)
		default:
			return <></>
	}
}
