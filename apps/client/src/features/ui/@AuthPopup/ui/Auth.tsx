import { GameButton } from '@/shared'
import cl from './Auth.module.scss'
import { useState } from 'react'
import { LoginPopup } from './@AuthPopup'

export const Auth = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handlePopupOpen = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<div className={cl.root}>
			<GameButton
				onCLick={handlePopupOpen}
				text={'привязать'}
				Icon='/email.png'
			/>
			<LoginPopup isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}
