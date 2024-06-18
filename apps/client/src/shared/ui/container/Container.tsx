import { ReactNode } from 'react'
import cl from './Container.module.scss'

export const Container = ({ children }: { children: ReactNode }) => {
	return <div className={cl.root}>{children}</div>
}
