import { Controller, FieldValues, useForm } from 'react-hook-form'
import { Input, LongPopup } from '@/shared'
import cl from './Settings.module.scss'
import { settingsFieldsArr } from './settingsFields.data'
import { CartSubmitButton } from '@/features'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UserDataSlice, useTypedSelector } from '@/store'

export const Settings = ({
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
		formState: { errors }
	} = useForm()

	const dispatch = useDispatch()

	const onSubmit = (data: FieldValues) => {
		dispatch(
			UserDataSlice.actions.setUserData({
				email: data.email,
				tel: data.tel,
				city: data.city,
				delivery: data.delivery,
				location: data.location,
				client: data.client,
				telegram: data.telegram
			})
		)
	}

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

	const { userData } = useTypedSelector(state => state.userData)

	return (
		<div className={cl.root}>
			<LongPopup title='Данные' isOpen={isOpen} setIsOpen={setIsOpen}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={cl.root__content}
				>
					<div className={cl.root__content__header}>
						<h2 className={cl.root__content__header_title}>
							ДАННЫЕ ДЛЯ ЗАКАЗОВ
						</h2>
						<span className={cl.root__content__header_description}>
							ВВЕДИТЕ ДЛЯ АВТОЗАПОЛНЕНИЯ <br /> ПРИ СЛЕДУЮЩИХ
							ЗАКАЗАХ
						</span>
					</div>
					<div className={cl.root__content__main}>
						{settingsFieldsArr.map((item, index) =>
							item.isRadio ? (
								<div
									key={index}
									className={
										cl.root__content__main__radioWrap
									}
								>
									<label
										className={`${
											cl.root__content__main__radioWrap__label
										} ${
											errors[item.id] &&
											cl.root__content__main__radioWrap__label_Err
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
												cl.root__content__main__radioWrap__label_textWrap
											}
										>
											<span
												className={
													cl.root__content__main__radioWrap__label_textWrap_title
												}
											>
												{item.label}
											</span>
											<span
												className={
													cl.root__content__main__radioWrap__label_textWrap_description
												}
											>
												{item.description}
											</span>
										</span>
									</label>
									<span
										className={
											cl.root__content__main__radioWrap__label_error
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
						<div className={cl.root__content__main_btn}>
							<CartSubmitButton title='СОХРАНИТЬ' />
						</div>
					</div>
				</form>
			</LongPopup>
		</div>
	)
}
