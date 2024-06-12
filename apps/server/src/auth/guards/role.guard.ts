import {
	CanActivate,
	ExecutionContext,
	SetMetadata,
	UseGuards,
	applyDecorators
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ERoles } from '@/common/enums'
import { AccessGuard } from './access.guard'

class RoleGuard implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	public canActivate(context: ExecutionContext): boolean {
		const roles = this.reflector.get<ERoles[]>('jwt_roles', context.getHandler())
		if (!roles) return true

		const req = context.switchToHttp().getRequest()

		const user = req.user

		return roles.some(i => user.role === i)
	}
}

export const RolesAuthGuard = (...roles: ERoles[]) => {
	return applyDecorators(AccessGuard(), SetMetadata('jwt_roles', roles), UseGuards(RoleGuard))
}
