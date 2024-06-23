import cl from './ChooseInventoryItemButton.module.scss'

export const ChooseInventoryItemButton = ({
	isActive,
	handleActive
}: {
	isActive: boolean
	handleActive: () => void
}) => {
	return (
		<button className={cl.root}>
			<label className={cl.root__Label}>
				<input
					checked={isActive}
					onChange={handleActive}
					type='checkbox'
					className={cl.root__Label_input}
				/>
				<span className={cl.root__Label_text}>
					{isActive ? 'ОТМЕНА' : 'ВЫБРАТЬ'}
				</span>
			</label>
		</button>
	)
}
