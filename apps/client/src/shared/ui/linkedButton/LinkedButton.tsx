import { Link } from 'react-router-dom'
import cl from './LinkedButton.module.scss'

export const LinkedButton = ({
	width,
	height,
	src,
	alt,
	to
}: {
	width: number
	height: number
	src: string
	alt: string
	to: string
}) => {
	return (
		<div className={cl.root}>
			<Link to={to} className={cl.root__link}>
				<img
					width={width}
					height={height}
					draggable={false}
					src={src}
					alt={alt}
				/>
			</Link>
		</div>
	)
}
