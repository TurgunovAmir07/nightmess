import React from 'react'
import cl from './Container.module.scss'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={cl.root}>{children}</div>
}
