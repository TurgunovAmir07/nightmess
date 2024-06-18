import { InventoryItemBage } from '../@InventoryItemBage/InventoryItemBage'
import cl from './InventoryItem.module.scss'
// eslint-disable-next-line
export const InventoryItem = ({ item }: { item: any }) => {
	return (
		<div className={cl.root}>
			{item?.src ? (
				<>
					<img
						className={cl.root_img}
						src={item.src}
						alt={item.alt}
					/>
					<InventoryItemBage count={item.count} />
				</>
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
