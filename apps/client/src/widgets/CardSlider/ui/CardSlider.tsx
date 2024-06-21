import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules'
import { SwiperSlide, Swiper as SwiperJs } from 'swiper/react'
import cl from './CardSlider.module.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/navigation'
import { NavigateSliderElementsButton } from '@/features/NavigateSliderElements'
import { useGetInventoryQuery } from '@/store'

export const CardSlider = () => {
	const { data } = useGetInventoryQuery()

	return (
		<div className={cl.root}>
			<NavigateSliderElementsButton side='left' className='leftEl' />
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
				{Array.from({ length: Number(data?.cards.length) }).map(
					(_, index) => (
						<SwiperSlide key={index}>
							<img
								style={{ width: '95%' }}
								src={`${
									import.meta.env.VITE_SERVER_STATIC_URL
								}/${data?.cards[index]?.card.image}`}
								alt={data?.cards[index]?.card.name}
								draggable={false}
							/>
						</SwiperSlide>
					)
				)}
			</SwiperJs>
			<NavigateSliderElementsButton side='right' className='rightEl' />
		</div>
	)
}
