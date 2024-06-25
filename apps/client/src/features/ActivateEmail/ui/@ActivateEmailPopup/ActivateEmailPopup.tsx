import { GameButton, Input, LoaderSpinner, Popup } from '@/shared'
import cl from './ActivateEmailPopup.module.scss'
import { activateEmailData } from '../../model/data/activateEmail.data'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useRegisterUserMutation } from '@/store'

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

	const [registerUser, { isLoading }] = useRegisterUserMutation()

	const onSubmit = (data: FieldValues) => {
		registerUser({
			email: data.email,
			password: data.password
		})
		reset()
	}

	if (isLoading) return <LoaderSpinner />

	return (
		<Popup
			title='РЕГИСТРАЦИЯ'
			isLongTitle
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
			</form>
		</Popup>
	)
}
