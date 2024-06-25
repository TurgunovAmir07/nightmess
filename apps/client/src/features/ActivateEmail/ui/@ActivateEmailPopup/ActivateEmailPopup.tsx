import { GameButton, Input, Popup } from '@/shared'
import cl from './ActivateEmailPopup.module.scss'
import { activateEmailData } from '../../model/data/activateEmail.data'
import { Controller, FieldValues, useForm } from 'react-hook-form'

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
		formState: { errors }
	} = useForm()

	const onSubmit = (data: FieldValues) => {
		console.log(data)
	}

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
