import { Link } from 'react-router-dom'
import { Container } from '@/shared'
import { Header } from '@/widgets/Header'
import cl from './InfoPage.module.scss'
import { infoData } from '../model/data/info.data'

const InfoPage = () => {
	return (
		<Container>
			<div className={cl.root}>
				<Header title='INFO' />
				<div className={cl.root__wrapper}>
					<h3 className={cl.root__wrapper_title}>Доставка:</h3>
					<span className={cl.root__wrapper__text}>
						Скорость и стоимость доставки <br /> зависит от
						выбранного вами <br /> способа доставки.
					</span>
					<span className={cl.root__wrapper__text}>
						Вы также можете следить за <br /> статусом заказа в
						личном кабинете.
					</span>
				</div>
				<div className={cl.root__wrapper}>
					<h3 className={cl.root__wrapper_title}>
						Обмен
						<span className={cl.root__wrapper__text_info}>\</span>
						возвраты:
					</h3>
					<span className={cl.root__wrapper__text}>
						В случае брака производится обмен <br /> вещи из
						наличия, либо возврат <br />
						денежных средств.
					</span>
					<span className={cl.root__wrapper__text}>
						По любым вопросам пишите <br /> в поддержку <br /> в
						телеграмм:{' '}
						<span className={cl.root__wrapper__text_info}>
							@nightmessworld
						</span>
					</span>
				</div>
				<div className={cl.root__wrapper}>
					{infoData.map((item, index) => (
						<Link
							key={index}
							to={item.path}
							className={cl.root__wrapper_link}
						>
							<img
								draggable={false}
								className={item.styles}
								src={item.src}
								alt={item.alt}
							/>
							{item.text}
							<img
								draggable={false}
								className={item.styles}
								src={item.src}
								alt={item.alt}
							/>
						</Link>
					))}
				</div>
			</div>
		</Container>
	)
}

export default InfoPage
