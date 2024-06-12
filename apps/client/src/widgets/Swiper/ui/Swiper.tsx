import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules'
import { SwiperSlide, Swiper as SwiperJs } from 'swiper/react'
import cl from './Swiper.module.scss'
import { SwiperNavigationButton } from '@/features/SwiperNavigationButton'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/navigation'

export const Swiper = () => {
	return (
		<div className={cl.root}>
			<SwiperNavigationButton left className='leftEl' />
			<SwiperJs
				style={{ maxWidth: '250px' }}
				spaceBetween={50}
				slidesPerView={1}
				grabCursor
				effect='coverflow'
				centeredSlides
				modules={[Pagination, EffectCoverflow, Navigation]}
				pagination={{ clickable: true }}
				navigation={{
					nextEl: '.rightEl',
					prevEl: '.leftEl'
				}}
				coverflowEffect={{
					rotate: 100,
					stretch: 0,
					depth: 1000,
					modifier: 1,
					slideShadows: false
				}}
			>
				<SwiperSlide>
					<img
						style={{ width: '95%' }}
						src='/CARD.png'
						alt='card'
						draggable={false}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ width: '95%' }}
						src='/CARD.png'
						alt='card'
						draggable={false}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ width: '95%' }}
						src='/CARD.png'
						alt='card'
						draggable={false}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ width: '95%' }}
						src='/CARD.png'
						alt='card'
						draggable={false}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ width: '95%' }}
						src='/CARD.png'
						alt='card'
						draggable={false}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ width: '95%' }}
						src='/CARD.png'
						alt='card'
						draggable={false}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						style={{ width: '95%' }}
						src='/CARD.png'
						alt='card'
						draggable={false}
					/>
				</SwiperSlide>
			</SwiperJs>
			<SwiperNavigationButton className='rightEl' />
		</div>
	)
}
