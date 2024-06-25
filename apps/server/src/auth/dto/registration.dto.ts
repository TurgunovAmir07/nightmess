import { z } from 'zod'

export const RegistrationDto = z.object({
	email: z.string({ message: 'Почта обязательна' }).email({ message: 'Невалидная почта' }),
	password: z
		.string({ message: 'Пароль обязателен' })
		.min(8, { message: 'Пароль должен быть длиннее 8 символов' })
		.max(32, { message: 'Пароль должен быть не больше 32 символов' })
})

export type TRegistrationDto = z.infer<typeof RegistrationDto>
