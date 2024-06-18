import cl from './ChooseInventoryItemButton.module.scss'

export const ChooseInventoryItemButton = ({
	isActive,
	handleActive
}: {
	isActive: boolean
	handleActive: () => void
}) => {
	return (
		<label className={cl.root}>
			<input
				checked={isActive}
				onChange={handleActive}
				type='checkbox'
				className={cl.root_input}
			/>
			<span className={cl.root_text}>
				{isActive ? 'ОТМЕНА' : 'ВЫБРАТЬ'}
			</span>
		</label>
	)
}
