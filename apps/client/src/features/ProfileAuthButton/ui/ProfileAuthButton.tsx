import { Link } from 'react-router-dom'
import cl from './ProfileAuthButton.module.scss'

export const ProfileAuthButton = () => {
	return (
		<div className={cl.root}>
			<button className={cl.root__text}>
				<Link to='/profile'>
					<img
						draggable={false}
						style={{ width: '50px' }}
						src='/button-profile.png'
						alt='auth'
					/>
				</Link>
			</button>
		</div>
	)
}
