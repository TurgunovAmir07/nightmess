import { useEffect } from 'react'
import { InventoryHeader } from './@InventoryHeader/InventoryHeader'
import { InventoryMain } from './@InventoryMain/InventoryMain'
import cl from './Inventory.module.scss'
import { CraftMain } from './@CraftMain/CraftMain'

export const Inventory = ({
	isOpen,
	setIsOpen
}: {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}) => {
	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false)
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEsc)
		}

		return () => {
			document.removeEventListener('keydown', handleEsc)
		}
	}, [isOpen, setIsOpen])

	const handleInventory = () => {
		setIsOpen(false)
	}

	return (
		<>
			<span
				onClick={() => setIsOpen(false)}
				className={`${cl.blackout} ${isOpen && cl.blackout_open}`}
			/>
			<div
				onClick={() => setIsOpen(false)}
				className={`${cl.root} ${isOpen && cl.root_open}`}
			>
				<div
					onClick={e => e.stopPropagation()}
					className={`${cl.root__content} ${
						isOpen && cl.root__content_open
					}`}
				>
					<InventoryHeader handleInventory={handleInventory} />
					<CraftMain />
					<InventoryMain />
				</div>
			</div>
		</>
	)
}
