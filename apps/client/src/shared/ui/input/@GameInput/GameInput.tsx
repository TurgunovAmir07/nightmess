import { GameInputButton } from '../@GameInputButton/GameInputButton'
import cl from './GameInput.module.scss'

export const GameInput = ({
	size,
	value
}: {
	size: 'large' | 'middle' | 'small'
	value: string
}) => {
	switch (size) {
		case 'small':
			return (
				<div className={cl.root}>
					<input
						value={value}
						className={cl.root__input}
						type='text'
					/>
					<GameInputButton size={size} />
				</div>
			)

		case 'middle':
			return (
				<div className={`${cl.root} ${cl.root_middle}`}>
					<input
						value={value}
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
						value={value ? value : ''}
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
