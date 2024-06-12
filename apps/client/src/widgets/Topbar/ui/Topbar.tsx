import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cl from './Topbar.module.scss'

export const Topbar = () => {
	const location = useLocation()
	const [activePath, setActivePath] = useState<string>(location.pathname)

	useEffect(() => {
		setActivePath(location.pathname)
	}, [location.pathname])

	return (
		<div className={cl.root}>
			<div className={cl.root__container}>
				<Link
					to='/game'
					className={`${cl.root__container__item} ${
						activePath === '/game' &&
						cl.root__container__item_active
					}`}
				>
					<label className={cl.root__container__item_label}>
						<input
							className={cl.root__container__item_label__radio}
							type='radio'
							name='topbar'
						/>
						<span className={cl.root__container__item_label__text}>
							GAME
						</span>
					</label>
				</Link>
				<Link
					to='/profile'
					className={`${cl.root__container__item} ${
						activePath === '/profile' &&
						cl.root__container__item_active
					}`}
				>
					<label className={cl.root__container__item_label}>
						<input
							className={cl.root__container__item_label__radio}
							type='radio'
							name='topbar'
						/>
						<span className={cl.root__container__item_label__text}>
							PROFILE
						</span>
					</label>
				</Link>
			</div>
		</div>
	)
}
