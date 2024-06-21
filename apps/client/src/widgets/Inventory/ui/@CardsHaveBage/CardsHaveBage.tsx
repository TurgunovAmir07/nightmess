import cl from './CardsHaveBage.module.scss'

export const CardsHaveBage = ({ quantity }: { quantity: string }) => {
	return (
		<div className={cl.root}>
			<div className={cl.root_text}>{quantity}</div>
		</div>
	)
}
