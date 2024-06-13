import { useState } from 'react'
import { useTypedSelector } from '@/store/lib/hooks/useTypedSelector'
import cl from './CartButton.module.scss'
import { Cart } from '@/widgets/Cart/ui/Cart'

export const CartButton = ({ removeTop }: { removeTop?: boolean }) => {
	const cart = useTypedSelector(state => state.cart.items)

	const [isOpen, setIsOpen] = useState(false)

	const handleCart = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<>
			<Cart setIsOpen={setIsOpen} isOpen={isOpen} />
			<div className={cl.root}>
				<button
					onClick={handleCart}
					className={`${cl.root__text} ${
						removeTop ? cl.root__text_removeTop : ''
					}`}
				>
					{cart.length > 0 && (
						<div
							style={{ color: '#000' }}
							className={cl.root__badge}
						>
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
		</>
	)
}
