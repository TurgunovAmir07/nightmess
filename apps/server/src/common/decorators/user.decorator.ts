import { JwtPayload } from '@/auth/dto'
import { ExecutionContext, createParamDecorator } from '@nestjs/common'

export const User = createParamDecorator((key: keyof JwtPayload, ctx: ExecutionContext) => {
	const req = ctx.switchToHttp().getRequest()

	const user = req.user

	if (!user) {
		return null
	}

	return key ? user[key] : user
})
