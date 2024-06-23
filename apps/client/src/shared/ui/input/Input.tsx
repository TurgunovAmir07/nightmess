import { FormInput, IInputProps, type TInput } from './@FormInput/FormInput'
import { GameInput } from './@GameInput/GameInput'

export const Input = ({
	variant,
	type,
	placeholder,
	field,
	error,
	label,
	size,
	value
}: {
	variant: 'form' | 'game'
	type?: TInput
	error?: IInputProps['error']
	label?: IInputProps['label']
	placeholder?: IInputProps['placeholder']
	field?: IInputProps['field']
	size?: 'small' | 'middle' | 'large'
	value?: string
}) => {
	switch (variant) {
		case 'form':
			return (
				<FormInput
					placeholder={placeholder}
					type={type}
					field={field}
					error={error}
					label={label}
				/>
			)
		case 'game':
			return (
				<GameInput value={value ? value : ''} size={size ?? 'small'} />
			)
		default:
			return <></>
	}
}
