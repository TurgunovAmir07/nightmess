import { pointsData } from '../model/data/points.data'
import cl from './Points.module.scss'

export const Points = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__wrap}>
				<img
					draggable={false}
					className={cl.root__wrap_img}
					src='/illustration-currency-lines.png'
					alt='points'
				/>
				{pointsData.map((item, index) => (
					<div className={cl.root__wrap_text} key={index}>
						{item.quantity}{' '}
						<img
							draggable={false}
							className={cl.root__wrap_text_img}
							src={item.src}
							alt={item.alt}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
