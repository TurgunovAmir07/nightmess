import { Controller, useForm } from 'react-hook-form'
import { GameButton, Input, Popup } from '@/shared'
import cl from './AuthPopup.module.scss'
import { loginFieldsArr, registerFieldsArr } from './AuthPopup.data'
import { useState } from 'react'

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

	const onSubmit = (data: unknown) => {
		reset()
		console.log(data)
	}

	return (
		<>
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
											error={errors[item.name]?.message}
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
						<GameButton
							src='/icon-mark.png'
							alt='mark'
							text={`${isLogin ? 'Вход' : 'Регистрация'}`}
							type='primary'
							size='middle'
							htmlType='submit'
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
