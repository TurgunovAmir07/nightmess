import cl from './GameButtonFrame.module.scss'

export const GameButtonFrame = () => (
	<img
		draggable={false}
		src='/button-game-btn.png'
		className={cl.root}
		alt='frame'
	/>
)
