import { ECardColor } from '@/common/enums'
import { z } from 'zod'

export const craftSchema = z
	.object({
		color: z.nativeEnum(ECardColor, { message: 'Невалидный enum' }),
		count: z
			.number({ message: 'Количество должно быть числом' })
			.min(1, 'Минимальное количество 1')
	})
	.required()

export type CraftDto = z.infer<typeof craftSchema>
