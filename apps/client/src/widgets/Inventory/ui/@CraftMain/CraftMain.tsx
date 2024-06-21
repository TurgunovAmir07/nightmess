import { inventoryItemsData } from '../../model/data/inventory.data'
import cl from './CraftMain.module.scss'

export const CraftMain = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__craft}>
				{inventoryItemsData.map(item => (
					<div key={item.id} className={cl.root__craft_item}>
						<img
							className={cl.root__craft_item_img}
							src={item.src}
							alt={item.alt}
						/>
					</div>
				))}
				<div className={cl.root__craft_result}>
					<img
						className={cl.root__craft_result_img}
						src='/icon-inventory-item.png'
						alt='result'
					/>
				</div>
			</div>
		</div>
	)
}
