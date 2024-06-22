import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules'
import { SwiperSlide, Swiper as SwiperJs } from 'swiper/react'
import cl from './CardSlider.module.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/navigation'
import { NavigateSliderElementsButton } from '@/features/NavigateSliderElements'
import { useLazyGetInventoryQuery } from '@/store'
import { useEffect, useState } from 'react'
import { LoaderSpinner } from '@/shared'
import { Stars } from './@Stars/Stars'

export const CardSlider = () => {
	const [trigger, { data, isLoading }] = useLazyGetInventoryQuery()

	const [currentCardRarity, setCurrentCardRarity] = useState('')

	// eslint-disable-next-line
	// @ts-ignore
	const handleSlideChange = swiper => {
		const rariry = data?.cards[swiper.activeIndex]?.card.rarity
		if (rariry) {
			setCurrentCardRarity(rariry)
		}
	}

	useEffect(() => {
		trigger()
	}, [trigger])

	if (isLoading) return <LoaderSpinner />

	return (
		<>
			<Stars count={currentCardRarity} />
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
					onSlideChange={handleSlideChange}
				>
					{data?.cards.map((item, index) => (
						<SwiperSlide key={index}>
							<img
								style={{ width: '95%' }}
								src={`${
									import.meta.env.VITE_SERVER_STATIC_URL
								}/${item.card.image}`}
								alt={item.card.color}
								draggable={false}
							/>
						</SwiperSlide>
					))}
				</SwiperJs>
				<NavigateSliderElementsButton
					side='right'
					className='rightEl'
				/>
			</div>
		</>
	)
}
