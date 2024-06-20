import { CanActivate, ExecutionContext, Injectable, UseGuards } from '@nestjs/common'
import { TokenService } from '../token.service'
import { Request } from 'express'

@Injectable()
class UserNoRequiredGuard implements CanActivate {
	constructor(private readonly tokenService: TokenService) {}

	public canActivate(context: ExecutionContext): boolean | Promise<boolean> {
		const req = context.switchToHttp().getRequest() as Request
		const authorization = req.headers.authorization

		if (!authorization) {
			return true
		}

		const [type, token] = authorization.split(' ')

		if (type !== 'Bearer' || !token) {
			return true
		}

		const user = this.tokenService.validateAccessToken(token)

		if (!user) {
			return true
		}

		req.user = user
		return true
	}
}

export const UserAuthNoRequiredGuard = () => UseGuards(UserNoRequiredGuard)
