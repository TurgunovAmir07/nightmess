import { useGetInventoryQuery } from '@/store'
import { mapCrossData } from '../../model/data/map.data'
import cl from './MapCrossItems.module.scss'

export const MapCrossItems = () => {
	const { data } = useGetInventoryQuery()

	return (
		<div className={cl.root}>
			{mapCrossData.map((item, index) => (
				<div
					key={index}
					className={`${cl.root__item} ${
						item.stage &&
						data?.stage === 'NULL' &&
						cl.root__item_null
					}
					${item.stage && data?.stage === 'ONE' && cl.root__item_null_one}
					${item.stage && data?.stage === 'TWO' && cl.root__item_null_one_two}
					${item.stage && data?.stage === 'THREE' && cl.root__item_null_one_two_three}
					`}
				>
					<button className={cl.root__item__btn}>
						<img
							draggable={false}
							className={cl.root__item__btn__img}
							src={item.src}
							alt={item.alt}
						/>
					</button>
				</div>
			))}
		</div>
	)
}
