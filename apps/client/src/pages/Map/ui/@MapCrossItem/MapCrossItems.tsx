import { useGetInventoryQuery } from '@/store'
import { mapCrossData } from '../../model/data/map.data'
import cl from './MapCrossItems.module.scss'

export const MapCrossItems = () => {
	const { data } = useGetInventoryQuery()

	const stageIndex = data
		? mapCrossData.findIndex(item => item.stage === data.stage)
		: 0

	return (
		<div className={cl.root}>
			{mapCrossData.map((item, index) => (
				<div key={index} className={cl.root__item}>
					<button className={cl.root__item__btn}>
						<img
							draggable={false}
							className={cl.root__item__btn__img}
							src={
								index <= stageIndex
									? item.src
									: 'icon-undefined-x.png'
							}
							alt={item.alt}
						/>
					</button>
				</div>
			))}
		</div>
	)
}
