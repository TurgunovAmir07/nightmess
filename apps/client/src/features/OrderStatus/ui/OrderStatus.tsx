import { StatusDelivery } from './@StatusDelivery'
import { StatusHome } from './@StatusHome'
import { StatusBox } from './@StatusBox'
import { StatusOrder } from './@StatusOrder'
import cl from './OrderStatus.module.scss'
import { StatusLine } from './@StatusLine'

export const OrderStatus = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__container}>
				<StatusOrder />
				<StatusLine />
				<StatusBox />
				<StatusLine />
				<StatusDelivery />
				<StatusLine />
				<StatusHome />
			</div>
		</div>
	)
}
