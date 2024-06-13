import cl from '../../ui/InfoPage.module.scss'

interface IInfoData {
	path: string
	src: string
	alt: string
	text: string
	styles: string
}

export const infoData: IInfoData[] = [
	{
		path: '/rules',
		src: '/button-gamepad.png',
		alt: 'gamepad',
		text: 'ПРАВИЛА ИГРЫ',
		styles: cl.root__wrapper_link_img
	},
	{
		path: '#',
		src: '/icon-review.png',
		alt: 'review',
		text: 'Отзывы',
		styles: cl.root__wrapper_link_review
	},
	{
		path: '#',
		src: '/icon-offerta.png',
		alt: 'offerta',
		text: 'Offer',
		styles: cl.root__wrapper_link_offerta
	},
	{
		path: '#',
		src: '/icon-offerta.png',
		alt: 'privacy',
		text: 'Privacy',
		styles: cl.root__wrapper_link_offerta
	}
]
