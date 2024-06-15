import { LinkedButton } from '@/shared'
import cl from './GoToMainPageButton.module.scss'

export const GoToMainPageButton = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__button}>
				<LinkedButton
					width={50}
					height={45}
					src={'/button-home.png'}
					alt={'home'}
					to={'/'}
				/>
			</div>
		</div>
	)
}
