import cl from './MiniInventory.module.scss'
import { MiniInventoryItem } from '.'
import { miniInventoryData } from '../model/data/miniInventory.data'

export const MiniInventory = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__wrap}>
				<img
					draggable={false}
					className={cl.root__wrap_img}
					src='/illustration-skills-showcase.png'
					alt='skills'
				/>
				<span className={cl.root__wrap_text}>2/9</span>
				<span className={cl.root__wrap_text}>OPEN</span>
				{miniInventoryData.map((item, index) => (
					<div className={cl.root__wrap__frame} key={index}>
						<MiniInventoryItem
							isEmpty={item.isEmpty}
							count={item.count}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
