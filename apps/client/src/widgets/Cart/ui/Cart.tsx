import { useEffect, useMemo, useState } from 'react'
import { GameButton, Input, Popup } from '@/shared'
import cl from './Cart.module.scss'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useActions, useCart, useTypedSelector } from '@/store'
import { cartFieldsArr } from '../model/data/cartFields.data'
import { CartProductsList } from './@CartProductsList/CartProductsList'
import { CartOrderInfo } from './@CartOrderInfo/CartOrderInfo'

export const Cart = ({
	isOpen,
	setIsOpen
}: {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}) => {
	const {
		handleSubmit,
		control,
		register,
		watch,
		formState: { errors }
	} = useForm()

	const { setOrder } = useActions()

	const onSubmit = (data: FieldValues) => {
		setOrder({
			items: cart,
			email: data.email,
			tel: data.tel,
			city: data.city,
			delivery: data.delivery,
			location: data.location,
			client: data.client,
			telegram: data.telegram,
			comment: data.comment,
			promotional_code: data.promotional_code,
			payment: data.payment,
			orderPrice: total + deliveryPrice
		})
	}

	const { userData } = useTypedSelector(state => state.userData)
	const [deliveryPrice, setDeliveryPrice] = useState<number>(0)
	const delivery = watch('delivery')

	useEffect(() => {
		if (delivery === 'post_office') {
			setDeliveryPrice(500)
		} else if (delivery === 'cys') {
			setDeliveryPrice(1100)
		} else if (delivery === 'express') {
			setDeliveryPrice(490)
		}
	}, [delivery])

	const city = watch('city')

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setIsOpen(false)
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEsc)
		}

		return () => {
			document.removeEventListener('keydown', handleEsc)
		}
	}, [isOpen, setIsOpen])

	const { cart, total } = useCart()

	const selectedDelivery = useMemo(() => {
		return cartFieldsArr.find(item => item.value === delivery)
	}, [delivery])

	return (
		<div className={cl.root}>
			<Popup
				isScrollAnimation
				title={'КОРЗИНА'}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={cl.root__content}
				>
					<CartProductsList />
					<div className={cl.root__content__total}>
						СУММА: {total} RUB
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '15px',
							marginTop: '30px'
						}}
					>
						{cartFieldsArr.map((item, index) =>
							item.isRadio ? (
								<div
									key={index}
									className={cl.root__content__radioWrap}
								>
									<label
										className={`${
											cl.root__content__radioWrap__delivery__label
										} ${
											errors[item.id] &&
											cl.root__content__radioWrap__delivery__label_Err
										}`}
										id={item.id}
									>
										<input
											type={item.type}
											value={item.value}
											defaultChecked={
												userData[
													item.id as keyof typeof userData
												] === item.value
											}
											{...register(item.id, {
												required:
													'Пожалуйста выберите один из вариантов!'
											})}
										/>
										<span
											className={
												cl.root__content__radioWrap__delivery__label_textWrap
											}
										>
											<span
												className={`${
													cl.root__content__radioWrap__delivery__label_textWrap_title
												} ${
													item.img &&
													cl.root__content__radioWrap__delivery__label_textWrap_title_removeMaxW
												}`}
											>
												{item.label}
												{item.img && (
													<img
														style={{
															width: '60px'
														}}
														src={item.img}
													/>
												)}
											</span>
											<span
												className={
													cl.root__content__radioWrap__delivery__label_textWrap_description
												}
											>
												{item.description}
											</span>
										</span>
									</label>
									<span
										className={
											cl.root__content__radioWrap__delivery__label_error
										}
									>
										{errors[item.id]?.message?.toString()}
									</span>
								</div>
							) : (
								<Controller
									name={item.name ? item.name : ''}
									control={control}
									key={item.label}
									rules={item.rules}
									defaultValue={
										userData[
											item.name as keyof typeof userData
										]
									}
									render={({ field }) => (
										<Input
											variant='form'
											field={field}
											error={
												errors[
													item.name ? item.name : ''
												]?.message
											}
											label={item.label}
											type={item.type}
											placeholder={item.placeholder}
										/>
									)}
								/>
							)
						)}
					</div>
					<CartOrderInfo
						total={total}
						city={city}
						deliveryPrice={deliveryPrice}
						selectedDelivery={selectedDelivery}
					/>
					<div className={cl.root__content_submitBtn}>
						<GameButton
							src='/icon-mark.png'
							alt='mark'
							text='ЗАКАЗАТЬ'
							type='primary'
							size='middle'
							htmlType='submit'
						/>
					</div>
				</form>
			</Popup>
		</div>
	)
}
