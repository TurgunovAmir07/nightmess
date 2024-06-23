import cl from './MiniInventoryItemBage.module.scss'

export const MiniInventoryItemBage = ({ count }: { count: number }) => {
	return (
		<div className={cl.root}>
			<span className={cl.root_count}>{count}</span>
		</div>
	)
}
