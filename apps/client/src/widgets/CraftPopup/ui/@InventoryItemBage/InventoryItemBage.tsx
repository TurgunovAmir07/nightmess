import cl from './InventoryItemBage.module.scss'

export const InventoryItemBage = ({ count }: { count: number }) => {
	return (
		<div className={cl.root}>
			<span className={cl.root_count}>{count}</span>
		</div>
	)
}
