import { GameButton } from '@/shared'
import cl from './OAuthGoogle.module.scss'

export const OAuthGoogle = () => {
	return (
		<div className={cl.root}>
			<GameButton text='привязать' Icon='/icon-google.png' />
		</div>
	)
}
