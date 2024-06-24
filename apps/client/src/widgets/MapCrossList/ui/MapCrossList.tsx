import { useGetInventoryQuery } from '@/store'
import cl from './MapCrossList.module.scss'
import { crossData } from '../model/data/cross.data'

export const MapCrossList = () => {
	const { data } = useGetInventoryQuery()

	const stageIndex = data
		? crossData.findIndex(item => item.stage === data.stage)
		: 0

	return (
		<div className={cl.root}>
			{crossData.map((item, index) => (
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
