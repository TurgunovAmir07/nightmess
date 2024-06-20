import { TCards } from '@/store'
import { InventoryItemBage } from '../@InventoryItemBage/InventoryItemBage'
import cl from './InventoryItem.module.scss'
export const InventoryItem = ({
	item,
	isChecked,
	handleChecked,
	isActive
}: {
	item: TCards | null
	isChecked: boolean
	isActive: boolean
	handleChecked: () => void
}) => {
	return (
		<div className={cl.root}>
			{item ? (
				<label
					className={`${cl.root__label} ${
						isActive && cl.root__label_active
					}`}
				>
					<input
						checked={isChecked}
						onChange={handleChecked}
						className={cl.root__label_radio}
						type='radio'
						name='item'
					/>
					<img
						draggable={false}
						className={`${cl.root__label_img} ${
							isChecked && cl.root__label_img_checked
						}`}
						src={`${import.meta.env.VITE_SERVER_STATIC_URL}/${
							item.card.miniature
						}`}
						alt={item.card.name}
					/>
					<InventoryItemBage count={item.count} />
				</label>
			) : (
				<img
					draggable={false}
					className={cl.root_lock}
					src='/icon-lock.png'
					alt='empty'
				/>
			)}
		</div>
	)
}
