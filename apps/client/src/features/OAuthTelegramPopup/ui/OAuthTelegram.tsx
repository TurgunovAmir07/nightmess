import { useState } from 'react'
import { GameButton } from '@/shared'
import { OAuthTelegramPopup } from './@OAuthTelegramPopup'
import cl from './OAuthTelegram.module.scss'

export const OAuthTelegram = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handlePopup = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<div className={cl.root}>
			<GameButton
				onCLick={handlePopup}
				text={'привязать'}
				Icon='/icon-telegram.png'
			/>
			<OAuthTelegramPopup isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}
