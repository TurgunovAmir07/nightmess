import { LinkedButton } from '@/shared'
import cl from './GoToGamePage.module.scss'

export const GoToGamePage = () => {
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
