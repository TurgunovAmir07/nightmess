import cl from './MiniInventory.module.scss'
import { OpenInventory } from '@/features/OpenInventory'
import { TCards, useGetInventoryQuery } from '@/store'
import { useEffect, useState } from 'react'
import { sorterItems } from '../../lib/sorterItems'
import { MiniInventoryItem } from '../@MiniInventoryItem/MiniInventoryItem'

export const MiniInventory = (
	// { activeIndex }: { activeIndex: number }
	{
		activeChunk,
		activeIndex,
		onItemClick
	}: {
		activeChunk: number
		activeIndex: number
		onItemClick: (index: number) => void
	}
) => {
	const { data } = useGetInventoryQuery()

	const [sortedItems, setSortedItems] = useState<(TCards | null)[]>([])
	const [cardsHave, setCardsHave] = useState<string>('0/9')

	useEffect(() => {
		if (data && data.cards) {
			const sorted = sorterItems([...data.cards])
			const chunkStartIndex = activeChunk * 4
			const chunkEndIndex = chunkStartIndex + 4
			const chunkedItems = sorted.slice(chunkStartIndex, chunkEndIndex)
			setCardsHave(`${data.cards.length}/9`)
			setSortedItems(chunkedItems)
		}
	}, [data, activeChunk])

	return (
		<div className={cl.root}>
			<div className={cl.root__wrap}>
				<img
					draggable={false}
					className={cl.root__wrap_img}
					src='/illustration-skills-showcase.png'
					alt='skills'
				/>
				<span className={cl.root__wrap_text}>{cardsHave}</span>
				<span className={cl.root__wrap_text}>
					<OpenInventory />
				</span>
				{sortedItems.map((item, index) => (
					<div className={cl.root__wrap__frame} key={index}>
						<MiniInventoryItem
							onClick={() => onItemClick(activeChunk * 4 + index)}
							isActive={index === activeIndex % 4}
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
