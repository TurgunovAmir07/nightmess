import { ExecutionContext, createParamDecorator } from '@nestjs/common'

export const Cookie = createParamDecorator((data: string, ctx: ExecutionContext) => {
	const req = ctx.switchToHttp().getRequest()

	const cookies = req.cookies

	return cookies[data]
})
