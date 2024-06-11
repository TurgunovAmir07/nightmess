import { Link } from 'react-router-dom'
import { Container } from '../../../shared'
import { Header } from '../../../widgets/Header'
import cl from './InfoPage.module.scss'

export const InfoPage = () => {
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
				{/* FIX вынести в .data и пробежаться через map() */}
				<div className={cl.root__wrapper}>
					<Link to='/rules' className={cl.root__wrapper_link}>
						<img
							draggable={false}
							className={cl.root__wrapper_link_img}
							src='/GAMEPAD копия.png'
							alt='gamepad'
						/>
						ПРАВИЛА ИГРЫ
						<img
							draggable={false}
							className={cl.root__wrapper_link_img}
							src='/GAMEPAD копия.png'
							alt='gamepad'
						/>
					</Link>
					<Link to='#' className={cl.root__wrapper_link}>
						<img
							draggable={false}
							className={cl.root__wrapper_link_review}
							src='/REVIEW.png'
							alt='review'
						/>
						Отзывы
						<img
							draggable={false}
							className={cl.root__wrapper_link_review}
							src='/REVIEW.png'
							alt='review'
						/>
					</Link>
				</div>
				<div className={cl.root__wrapper}>
					<Link to='#' className={cl.root__wrapper_link}>
						<img
							draggable={false}
							className={cl.root__wrapper_link_offerta}
							src='/OFERTA.png'
							alt='oferta'
						/>
						Offer
						<img
							draggable={false}
							className={cl.root__wrapper_link_offerta}
							src='/OFERTA.png'
							alt='oferta'
						/>
					</Link>
					<Link to='#' className={cl.root__wrapper_link}>
						<img
							draggable={false}
							className={cl.root__wrapper_link_offerta}
							src='/OFERTA.png'
							alt='oferta'
						/>
						Privacy
						<img
							draggable={false}
							className={cl.root__wrapper_link_offerta}
							src='/OFERTA.png'
							alt='oferta'
						/>
					</Link>
				</div>
			</div>
		</Container>
	)
}
