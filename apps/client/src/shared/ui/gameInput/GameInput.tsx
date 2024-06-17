import cl from './GameInput.module.scss'
import { GameInputCover } from './@GameInputCover/GameInputCover'

export const GameInput = () => {
	return (
		<div className={cl.root}>
			<GameInputCover />
			<input className={cl.root__input} type='text' maxLength={8} />
		</div>
	)
}
