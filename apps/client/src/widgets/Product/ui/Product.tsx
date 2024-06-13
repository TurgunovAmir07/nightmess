import { Link } from 'react-router-dom'
import cl from './Product.module.scss'

export const Product = ({
	name,
	icon,
	price,
	id,
	isShowCase
}: {
	name: string
	icon: string
	price?: number
	id: number
	isShowCase?: boolean
}) => {
	return (
		<Link to={`/product/${id}`} className={cl.root}>
			<img
				className={`${cl.root__icon} ${
					isShowCase && cl.root__icon__showcase
				}`}
				alt={name}
				src={icon}
			/>
			<div
				className={`${cl.root__name} ${
					isShowCase && cl.root__name__showcase
				}`}
			>
				{name}
			</div>
			<div className={cl.root__price}>{!!price && `${price} руб`}</div>
		</Link>
	)
}
