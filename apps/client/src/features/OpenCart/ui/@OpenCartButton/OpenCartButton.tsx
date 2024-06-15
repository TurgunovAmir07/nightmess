import { useCart } from '@/store'
import cl from './OpenCartButton.module.scss'

export const OpenCartButton = ({
	handleCart,
	removeTop
}: {
	handleCart: () => void
	removeTop?: boolean
}) => {
	const { cart } = useCart()

	return (
		<div className={cl.root}>
			<button
				onClick={handleCart}
				className={`${cl.root__text} ${
					removeTop ? cl.root__text_removeTop : ''
				}`}
			>
				{cart.length > 0 && (
					<div style={{ color: '#000' }} className={cl.root__badge}>
						{cart.length}
					</div>
				)}
				<img
					draggable={false}
					style={{ width: '44px' }}
					src='/button-cart.png'
					alt='cart'
				/>
			</button>
		</div>
	)
}
