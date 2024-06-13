import { useState } from 'react'
import { Settings } from '@/widgets/Settings'
import cl from './SettingsButton.module.scss'

export const SettingsButton = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleSettings = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<>
			<Settings isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className={cl.root}>
				<button onClick={handleSettings} className={cl.root__text}>
					<img
						draggable={false}
						style={{ width: '50px' }}
						src='/button-settings.png'
						alt='settings'
					/>
				</button>
			</div>
		</>
	)
}
