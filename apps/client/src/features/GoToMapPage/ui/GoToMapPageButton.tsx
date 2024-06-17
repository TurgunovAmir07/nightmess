import { LinkedButton } from '@/shared'
import cl from './GoToMapPageButton.module.scss'

export const GoToMapPageButton = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__button}>
				<LinkedButton
					width={50}
					height={50}
					src={'/button-map.png'}
					alt={'map'}
					to={'/map'}
				/>
			</div>
		</div>
	)
}
