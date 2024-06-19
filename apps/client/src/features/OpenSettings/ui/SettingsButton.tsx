import { Settings } from '@/widgets/Settings'
import { useState } from 'react'
import { OpenSettingsButton } from './@OpenSettingsButton/OpenSettingsButton'

export const SettingsButton = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleSettings = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<>
			<Settings isOpen={isOpen} setIsOpen={setIsOpen} />
			<OpenSettingsButton handleSettings={handleSettings} />
		</>
	)
}
