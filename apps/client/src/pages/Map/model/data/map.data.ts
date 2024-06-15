import cl from '../../ui/MapPage.module.scss'

interface TMapCrossData {
	src: string
	alt: string
	styles: string
}

interface TMapNicknamesData {
	nickname: string
}

export const mapCrossData: TMapCrossData[] = [
	{
		src: '/icon-red-x.png',
		alt: 'red_x',
		styles: cl.root__main__btn__redX
	},
	{
		src: '/icon-yellow-x.png',
		alt: 'yellow_x',
		styles: cl.root__main__btn__yellowX
	},
	{
		src: '/icon-green-x.png',
		alt: 'green_x',
		styles: cl.root__main__btn__greenX
	},
	{
		src: '/icon-cjan-x.png',
		alt: 'cjan_x',
		styles: cl.root__main__btn__cjanX
	}
]

export const mapNicknamesData: TMapNicknamesData[] = [
	{
		nickname: '1. nickname'
	},
	{
		nickname: '2. nickname'
	},
	{
		nickname: '3. nickname'
	},
	{
		nickname: '4. nickname'
	}
]
