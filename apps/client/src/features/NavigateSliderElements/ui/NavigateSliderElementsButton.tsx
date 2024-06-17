import cl from './NavigateSliderElementsButton.module.scss'

export const NavigateSliderElementsButton = ({
	className,
	side
}: {
	className?: string
	side: 'left' | 'right'
}) => {
	switch (side) {
		case 'right':
			return (
				<button className={`${cl.root} ${className}`}>
					<img
						className={cl.root__icon}
						src='/button-arrow-right.png'
						alt='slider_nav'
					/>
				</button>
			)
		case 'left':
			return (
				<button className={`${cl.root} ${className}`}>
					<img
						className={`${cl.root__icon} ${cl.root__icon_left}`}
						src='/button-arrow-right.png'
						alt='slider_nav'
					/>
				</button>
			)
		default:
			return <></>
	}
}
