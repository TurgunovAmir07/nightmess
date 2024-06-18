import { Cart } from '@/widgets/Cart'
import { useState } from 'react'
import { OpenCartButton } from './@OpenCartButton/OpenCartButton'

export const CartButton = ({ removeTop }: { removeTop?: boolean }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleCart = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<>
			<Cart setIsOpen={setIsOpen} isOpen={isOpen} />
			<OpenCartButton removeTop={removeTop} handleCart={handleCart} />
		</>
	)
}
