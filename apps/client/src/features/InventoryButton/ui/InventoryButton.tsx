import cl from './InventoryButton.module.scss'

export const InventoryButton = ({ onClick }: { onClick?: () => void }) => {
	return (
		<div className={cl.root}>
			<button onClick={onClick} className={cl.root__btn}>
				<img
					draggable={false}
					className={cl.root__btn_img}
					src='/icon-inventory-box.png'
					alt='inventory'
				/>
			</button>
		</div>
	)
}
