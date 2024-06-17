import { useId, type InputHTMLAttributes } from 'react'
import cl from './FormInput.module.scss'
import type {
	ControllerRenderProps,
	FieldError,
	FieldErrorsImpl,
	Merge
} from 'react-hook-form'

export type TInput =
	| 'text'
	| 'number'
	| 'password'
	| 'email'
	| 'tel'
	| string
	| undefined

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	placeholder?: string
	type?: TInput
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	field?: ControllerRenderProps<any, any>
	error?: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined
	label?: string
}

export const FormInput = ({
	placeholder,
	type,
	field,
	error,
	label,
	...props
}: IInputProps) => {
	const id = useId()

	return (
		<>
			<div className={cl.root}>
				{!!label && (
					<label htmlFor={id} className={cl.root__label}>
						{label}
					</label>
				)}
				<input
					id={id}
					className={`${cl.root__input} ${
						error ? cl.root__input__Err : ''
					}`}
					type={type}
					placeholder={placeholder}
					value={field?.value || ''}
					onChange={field?.onChange}
					{...props}
				/>
				<span className={cl.root__textErr}>{error?.toString()}</span>
			</div>
		</>
	)
}
