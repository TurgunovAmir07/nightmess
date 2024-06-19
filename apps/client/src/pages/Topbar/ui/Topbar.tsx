import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import cl from './Topbar.module.scss'
import { useEffect, useState } from 'react'
import { Container } from '@/shared'
import { topbarData } from '../model/data/topbar.data'

export const Topbar = () => {
	const location = useLocation()
	const [activePath, setActivePath] = useState<string>(location.pathname)

	useEffect(() => {
		setActivePath(location.pathname)
	}, [location.pathname])

	if (location.pathname === '/') return <Navigate to='/main' />

	return (
		<Container>
			<div className={cl.root}>
				<nav className={cl.root__container}>
					<span
						className={`${cl.root__container_separator} ${
							activePath === '/game'
								? cl.root__container_separator_left
								: cl.root__container_separator_right
						}
            `}
					/>
					<span className={cl.root__container_background} />
					{topbarData.map((item, index) => (
						<Link
							key={index}
							to={item.path}
							className={cl.root__container__item}
						>
							<span className={cl.root__container__item__text}>
								{item.text}
							</span>
						</Link>
					))}
				</nav>
			</div>
			<Outlet />
		</Container>
	)
}
