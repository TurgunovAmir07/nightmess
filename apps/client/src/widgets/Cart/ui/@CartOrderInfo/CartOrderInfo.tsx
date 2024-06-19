import cl from './CartOrderInfo.module.scss'

export const CartOrderInfo = ({
	total,
	city,
	deliveryPrice,
	selectedDelivery
}: {
	total: number
	city: string
	deliveryPrice: number
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	selectedDelivery: any
}) => {
	return (
		<div className={cl.root}>
			<span className={cl.root_text}>Сумма: {total} RUB.</span>
			<span className={cl.root_text}>
				Доставка: (
				{selectedDelivery ? selectedDelivery.label : 'не выбрано'}
				):
				{' ' + deliveryPrice} RUB.
			</span>
			<span className={cl.root_text}>
				Россия, {city ? 'г.' + city : 'город не выбран'}
			</span>
			<span className={cl.root_total}>
				Итоговая сумма: {total + deliveryPrice} RUB.
			</span>
		</div>
	)
}
