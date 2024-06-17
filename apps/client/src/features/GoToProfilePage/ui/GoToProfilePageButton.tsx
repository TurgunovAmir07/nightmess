import { LinkedButton } from '@/shared'
import cl from './GoToProfilePageButton.module.scss'

export const GoToProfilePageButton = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__button}>
				<LinkedButton
					width={50}
					height={45}
					src={'/button-profile.png'}
					alt={'profile'}
					to={'/profile'}
				/>
			</div>
		</div>
	)
}
