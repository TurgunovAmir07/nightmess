import { Container } from '@/shared'
import { Header } from '@/widgets/Header'
import cl from './MapPage.module.scss'
import { mapNicknamesData } from '../model/data/map.data'
import { MapCrossItems } from './@MapCrossItem/MapCrossItems'

const MapPage = () => {
	return (
		<Container>
			<div className={cl.root}>
				<Header isMap title='КАРТА' />
				<div className={cl.root__main}>
					<MapCrossItems />
				</div>
				<div className={cl.root__footer}>
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

export default MapPage
