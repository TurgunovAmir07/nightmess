import { Container } from '@/shared'
import { Header } from '@/widgets/Header'
import cl from './MapPage.module.scss'
import { mapCrossData, mapNicknamesData } from '../model/data/map.data'

export const MapPage = () => {
	return (
		<Container>
			<div className={cl.root}>
				<Header isMap title='КАРТА' />
				<div className={cl.root__main}>
					<img
						draggable={false}
						className={cl.root__main__legs}
						src='/legs.png'
						alt='legs'
					/>
					{mapCrossData.map((item, index) => (
						<button key={index} className={cl.root__main__btn}>
							<img
								draggable={false}
								className={item.styles}
								src={item.src}
								alt={item.alt}
							/>
						</button>
					))}
				</div>
				<div className={cl.root__footer}>
					<img
						draggable={false}
						className={cl.root__footer_img}
						src='/map_footer.png'
						alt='map_footer'
					/>
					<div className={cl.root__footer__top}>
						{mapNicknamesData.map((item, index) => (
							<div
								key={index}
								className={cl.root__footer__top_text}
							>
								{item.nickname}
							</div>
						))}
					</div>
					<div className={cl.root__footer_name}>nickname</div>
				</div>
			</div>
		</Container>
	)
}
