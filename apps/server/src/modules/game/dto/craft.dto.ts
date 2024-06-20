import { ECardColor } from '@/common/enums'
import { z } from 'zod'

export const craftSchema = z
	.object({
		color: z.nativeEnum(ECardColor),
		count: z.number().min(1)
	})
	.required()

export type CraftDto = z.infer<typeof craftSchema>
