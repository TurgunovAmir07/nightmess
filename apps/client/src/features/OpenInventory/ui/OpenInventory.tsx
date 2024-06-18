import { Inventory } from '@/widgets/CraftPopup'
import { OpenInventoryButton } from './@OpenInventoryButton/OpenInventoryButton'
import { useState } from 'react'

export const OpenInventory = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleInventory = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<>
			<Inventory isOpen={isOpen} setIsOpen={setIsOpen} />
			<OpenInventoryButton handleInventory={handleInventory} />
		</>
	)
}
