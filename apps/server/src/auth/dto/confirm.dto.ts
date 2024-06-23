import { z } from 'zod'

export const confirmDto = z.enum(['webapp', 'app']).optional()

export type ConfirmDto = z.infer<typeof confirmDto>
