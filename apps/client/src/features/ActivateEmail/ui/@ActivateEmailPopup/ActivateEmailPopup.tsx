import { GameButton, Input, LoaderSpinner, Popup } from '@/shared'
import cl from './ActivateEmailPopup.module.scss'
import { activateEmailData } from '../../model/data/activateEmail.data'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useLoginUserMutation, useRegisterUserMutation } from '@/store'
import { useState } from 'react'

export const ActivateEmailPopup = ({
	isOpen,
	setIsOpen
}: {
	isOpen: boolean
	setIsOpen: (e: boolean) => void
}) => {
	const {
		handleSubmit,
		control,
		reset,
		formState: { errors }
	} = useForm()

	const [isLogin, setIsLogin] = useState(true)

	const [registerUser, { isLoading }] = useRegisterUserMutation()
	const [loginUser] = useLoginUserMutation()

	const onSubmit = (data: FieldValues) => {
		{
			isLogin
				? loginUser({
						email: data.email,
						password: data.password
						// eslint-disable-next-line
				  })
				: registerUser({
						email: data.email,
						password: data.password
						// eslint-disable-next-line
				  })
		}
		reset()
	}

	const handleChangeAuth = () => {
		setIsLogin(prev => !prev)
	}

	if (isLoading) return <LoaderSpinner />

	return (
		<Popup
			title={isLogin ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}
			isLongTitle={!isLogin}
			isOpen={isOpen}
			setIsOpen={setIsOpen}
		>
			<form className={cl.root} onSubmit={handleSubmit(onSubmit)}>
				{activateEmailData.map((item, index) => (
					<Controller
						name={item.name}
						control={control}
						key={index}
						rules={item.rules}
						render={({ field }) => (
							<Input
								variant='form'
								field={field}
								error={errors[item.name]?.message}
								label={item.label}
								type={item.type}
								placeholder={item.placeholder}
							/>
						)}
					/>
				))}
				<div className={cl.root_btn}>
					<GameButton
						text='ОТПРАВИТЬ'
						type='primary'
						size='middle'
						htmlType='submit'
					/>
				</div>
				<div className={cl.root__account}>
					{!isLogin ? 'Уже есть аккаунт?' : 'Ещё нет аккаунта?'}
					<span
						className={cl.root__account_link}
						onClick={handleChangeAuth}
					>
						{!isLogin ? 'Логин' : 'Регистрация'}
					</span>
				</div>
			</form>
		</Popup>
	)
}
