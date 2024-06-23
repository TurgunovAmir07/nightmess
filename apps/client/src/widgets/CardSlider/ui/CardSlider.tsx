import { Pagination, EffectCoverflow, Navigation } from 'swiper/modules'
import { SwiperSlide, Swiper as SwiperJs } from 'swiper/react'
import cl from './CardSlider.module.scss'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/navigation'

import { NavigateSliderElementsButton } from '@/features/NavigateSliderElements'
import { TCards, useLazyGetInventoryQuery } from '@/store'
import { useEffect, useRef, useState } from 'react'
import { LoaderSpinner } from '@/shared'
import { Stars } from './@Stars/Stars'
import { MiniInventory } from './@MiniInventory/MiniInventory'
import { sorterItems } from '../lib/sorterItems'

export const CardSlider = () => {
	const [trigger, { data, isLoading }] = useLazyGetInventoryQuery()

	const [currentCardRarity, setCurrentCardRarity] = useState('')
	const [sortedItems, setSortedItems] = useState<(TCards | null)[]>([])
	const [activeIndex, setActiveIndex] = useState(0)
	const [currentChunk, setCurrentChunk] = useState(0)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const swiperRef = useRef<any>(null)

	useEffect(() => {
		trigger()

		if (data && data.cards) {
			const sorted = sorterItems([...data.cards])
			setSortedItems(sorted)
		}
	}, [trigger, data])

	useEffect(() => {
		if (data && data.cards) {
			const sorted = sorterItems([...data.cards])
			setSortedItems(sorted)

			const initialRarity = sorted[0]?.card.rarity
			if (initialRarity) {
				setCurrentCardRarity(initialRarity)
			}
		}
	}, [data])

	// eslint-disable-next-line
	// @ts-ignore
	const handleSlideChange = swiper => {
		const rarity = sortedItems[swiper.activeIndex]?.card.rarity
		if (rarity) {
			setCurrentCardRarity(rarity)
		}
		setActiveIndex(swiper.activeIndex)

		if (
			swiper.activeIndex % 4 === 0 ||
			(swiper.activeIndex + 1) % 4 === 0
		) {
			setCurrentChunk(Math.floor(swiper.activeIndex / 4))
		}
	}

	const handleItemClick = (index: number) => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(index)
		}
	}

	if (isLoading) return <LoaderSpinner />

	return (
		<>
			<Stars count={currentCardRarity} />
			<div className={cl.root}>
				<NavigateSliderElementsButton side='left' className='leftEl' />
				<SwiperJs
					ref={swiperRef}
					onSwiper={swiper => {
						swiperRef.current = swiper
					}}
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
					{sortedItems.map((item, index) => (
						<SwiperSlide key={index}>
							<img
								style={{ width: '95%' }}
								src={`${
									import.meta.env.VITE_SERVER_STATIC_URL
								}/${item?.card.image}`}
								alt={item?.card.color}
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
			<MiniInventory
				activeChunk={currentChunk}
				activeIndex={activeIndex}
				onItemClick={handleItemClick}
			/>
		</>
	)
}
