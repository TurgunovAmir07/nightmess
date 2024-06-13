import { Link } from 'react-router-dom'
import cl from './GamepadButton.module.scss'

export const GamepadButton = () => {
	return (
		<div className={cl.root}>
			<button className={cl.root__text}>
				<Link to='/game'>
					<img
						draggable={false}
						style={{ width: '55px' }}
						src='/button-gamepad.png'
						alt='gamepad'
					/>
				</Link>
			</button>
		</div>
	)
}
