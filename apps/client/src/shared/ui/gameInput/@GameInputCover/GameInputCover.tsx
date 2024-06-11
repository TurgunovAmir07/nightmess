import { GameInputFrame } from '../@GameInputFrame/GameInputFrame'
import cl from './GameInputCover.module.scss'

export const GameInputCover = () => {
	return (
		<>
			<img
				draggable={false}
				className={cl.root}
				src='/ник.png'
				alt='nickname'
			/>
			<GameInputFrame />
		</>
	)
}
