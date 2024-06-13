import { Link } from 'react-router-dom'
import cl from './HomeButton.module.scss'

export const HomeButton = () => {
	return (
		<div className={cl.root}>
			<button className={cl.root__text}>
				<Link to='/'>
					<img
						draggable={false}
						style={{ width: '50px' }}
						src='/button-home.png'
						alt='home'
					/>
				</Link>
			</button>
		</div>
	)
}
