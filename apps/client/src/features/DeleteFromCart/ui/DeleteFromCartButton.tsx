import { useActions } from '@/store'
import cl from './DeleteFromCartButton.module.scss'

export const DeleteFromCartButton = ({ id }: { id: number }) => {
	const { removeFromCart } = useActions()

	return (
		<button
			type='button'
			onClick={() =>
				removeFromCart({
					id: id
				})
			}
			className={cl.root}
		>
			<img
				className={cl.root_img}
				src='/button-delete-product.png'
				alt='delete'
			/>
		</button>
	)
}
