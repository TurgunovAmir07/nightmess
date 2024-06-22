import { Container } from '@/shared'
import { Header } from '@/widgets/Header'
import cl from './MapPage.module.scss'
import { MapCrossItems } from './@MapCrossItem/MapCrossItems'
import { RatingTop } from '@/widgets/RatingTop'
import { useTypedSelector } from '@/store'

const MapPage = () => {
	const name = useTypedSelector(state => state.authSlice.user?.name)

	return (
		<Container>
			<div className={cl.root}>
				<Header isMap title='КАРТА' />
				<div className={cl.root__main}>
					<MapCrossItems />
				</div>
				<div className={cl.root__footer}>
					<RatingTop />
					<div className={cl.root__footer_name}>
						{name ? name : 'Гость'}
					</div>
				</div>
			</div>
		</Container>
	)
}

export default MapPage
