import { GameInputFrame } from '../@GameInputFrame/GameInputFrame'
import cl from './GameInputCover.module.scss'

export const GameInputCover = () => {
	return (
		<>
			<img
				draggable={false}
				className={cl.root}
				src='/input-game-inpt.png'
				alt='nickname'
			/>
			<GameInputFrame />
		</>
	)
}
