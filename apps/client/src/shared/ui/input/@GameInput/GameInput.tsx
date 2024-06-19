import { GameInputButton } from '../@GameInputButton/GameInputButton'
import cl from './GameInput.module.scss'

export const GameInput = ({ size }: { size: 'large' | 'middle' | 'small' }) => {
	switch (size) {
		case 'small':
			return (
				<div className={cl.root}>
					<input className={cl.root__input} type='text' />
					<GameInputButton size={size} />
				</div>
			)

		case 'middle':
			return (
				<div className={`${cl.root} ${cl.root_middle}`}>
					<input
						className={`${cl.root__input} ${cl.root__input_middle}`}
						type='text'
					/>
					<GameInputButton size={size} />
				</div>
			)

		case 'large':
			return (
				<div className={`${cl.root} ${cl.root_large}`}>
					<input
						className={`${cl.root__input} ${cl.root__input_large}`}
						type='text'
					/>
					<GameInputButton size={size} />
				</div>
			)

		default:
			return <></>
	}
}
