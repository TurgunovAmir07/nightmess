import { LinkedButton } from '@/shared'
import cl from './GoToGamePageButton.module.scss'

export const GoToGamePageButton = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__button}>
				<LinkedButton
					width={55}
					height={35}
					src={'/button-gamepad.png'}
					alt={'gamepad'}
					to={'/game'}
				/>
			</div>
		</div>
	)
}
