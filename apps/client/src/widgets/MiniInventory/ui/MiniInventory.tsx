import cl from './MiniInventory.module.scss'
import { MiniInventoryItem } from '.'
import { OpenInventory } from '@/features/OpenInventory'
import { TCards, useGetInventoryQuery } from '@/store'
import { useEffect, useState } from 'react'
import { sorterItems } from '../lib/sorterItems'

export const MiniInventory = () => {
	const { data } = useGetInventoryQuery()

	const [sortedItems, setSortedItems] = useState<(TCards | null)[]>([])

	useEffect(() => {
		if (data && data.cards) {
			const sorted = sorterItems([...data.cards]).slice(0, 4)
			setSortedItems(sorted)
		}
	}, [data])

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
				<span className={cl.root__wrap_text}>
					<OpenInventory />
				</span>
				{data?.cards &&
					sortedItems.map((item, index) => (
						<div className={cl.root__wrap__frame} key={index}>
							<MiniInventoryItem
								count={item && item.count}
								src={item && item.card.miniature}
								alt={item ? item.card.name : ''}
							/>
						</div>
					))}
			</div>
		</div>
	)
}
