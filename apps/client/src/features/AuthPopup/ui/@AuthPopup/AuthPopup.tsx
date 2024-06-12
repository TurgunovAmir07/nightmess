import { Controller, useForm } from 'react-hook-form'
import { Input, Popup } from '@/shared'
import cl from './AuthPopup.module.scss'
import { loginFieldsArr, registerFieldsArr } from './AuthPopup.data'
import { CartSubmitButton } from '@/features/CartSubmitButton'
import { useCurrentQuery, useLoginMutation, useRegisterMutation } from '@/store'
import { useState } from 'react'
import { LoaderSpinner } from '@/shared/ui/loader-spinner'

export const LoginPopup = ({
	isOpen,
	setIsOpen
}: {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}) => {
	const [isLogin, setIsLogin] = useState(false)

	const handleChangeAuth = () => {
		setIsLogin(prev => !prev)
	}

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

	const [loginUser] = useLoginMutation()
	const [registerUser] = useRegisterMutation()
	const [error, setError] = useState('')
	const { isLoading, refetch } = useCurrentQuery()

	// eslint-disable-next-line
	const onSubmit = async (data: any) => {
		try {
			{
				isLogin
					? await loginUser(data).unwrap()
					: await registerUser(data).unwrap()
			}
			refetch()
			reset()
			setError('')
		} catch (e) {
			// eslint-disable-next-line
			// @ts-ignore
			if (e.status === 400) {
				setError('Введен неверный логин или пароль')
			} else {
				setError('Что-то пошло не так, попробуйте позже')
			}
		}
	}

	return (
		<>
			{isLoading && <LoaderSpinner />}
			<Popup
				isLongTitle={!isLogin}
				title={`${isLogin ? 'Логин' : 'Регистрация'}`}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			>
				<form className={cl.root} onSubmit={handleSubmit(onSubmit)}>
					{isLogin ? (
						<>
							{loginFieldsArr.map((item, index) => (
								<Controller
									control={control}
									key={index}
									rules={item.rules}
									name={item.name}
									render={({ field }) => (
										<Input
											field={field}
											error={
												errors[item.name]?.message ||
												error
											}
											label={item.label}
											type={item.type}
											placeholder={item.placeholder}
										/>
									)}
								/>
							))}
						</>
					) : (
						<>
							{registerFieldsArr.map((item, index) => (
								<Controller
									control={control}
									key={index}
									name={item.name}
									rules={item.rules}
									render={({ field }) => (
										<Input
											field={field}
											error={errors[item.name]?.message}
											label={item.label}
											type={item.type}
											placeholder={item.placeholder}
										/>
									)}
								/>
							))}
						</>
					)}

					<div className={cl.root_submitBtn}>
						<CartSubmitButton
							isNoIcon
							title={`${isLogin ? 'Вход' : 'Регистрация'}`}
						/>
					</div>
				</form>
				<div className={cl.root__account}>
					{!isLogin ? 'Уже есть аккаунт?' : 'Ещё нет аккаунта?'}
					<span
						className={cl.root__account_link}
						onClick={handleChangeAuth}
					>
						{!isLogin ? 'Логин' : 'Регистрация'}
					</span>
				</div>
			</Popup>
		</>
	)
}
