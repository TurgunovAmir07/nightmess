import { Controller, FieldValues, useForm } from 'react-hook-form'
import { GameButton, Input, Popup } from '@/shared'
import cl from './Settings.module.scss'
import { settingsFieldsArr } from '../model/data/settingsFields.data'
import { useEffect } from 'react'
import { useActions, useTypedSelector } from '@/store'
import { SettingsHeader } from './@SettingsHeader/SettingsHeader'

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

	const { setUserData } = useActions()

	const onSubmit = (data: FieldValues) => {
		setUserData({
			email: data.email,
			tel: data.tel,
			city: data.city,
			delivery: data.delivery,
			location: data.location,
			client: data.client,
			telegram: data.telegram
		})
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
			<Popup
				isScrollAnimation
				title='Данные'
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={cl.root__content}
				>
					<SettingsHeader />
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
						<div className={cl.root__content__main_btn}>
							<GameButton
								src='/icon-mark.png'
								alt='mark'
								text='СОХРАНИТЬ'
								type='primary'
								size='middle'
								htmlType='submit'
							/>
						</div>
					</div>
				</form>
			</Popup>
		</div>
	)
}
