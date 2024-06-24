import { z } from 'zod'

const UserOAuthDto = z.object({
	email: z.string(),
	name: z.string()
})

export type TUserOAuthDto = z.infer<typeof UserOAuthDto>
