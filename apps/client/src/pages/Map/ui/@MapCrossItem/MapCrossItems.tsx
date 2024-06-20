import { mapCrossData } from '../../model/data/map.data'
import cl from './MapCrossItems.module.scss'

export const MapCrossItems = () => {
	return (
		<div className={cl.root}>
			{mapCrossData.map((item, index) => (
				<div key={index} className={cl.root__item}>
					<button className={cl.root__item__btn}>
						<img
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
