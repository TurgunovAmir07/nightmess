import { useState } from 'react'
import { ActivateEmailButton } from './@ActivateEmailButton/ActivateEmailButton'
import { ActivateEmailPopup } from './@ActivateEmailPopup/ActivateEmailPopup'

export const ActivateEmail = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<>
			<ActivateEmailButton onClick={handleOpen} />
			<ActivateEmailPopup isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}
