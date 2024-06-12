import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ACCESS_JWT_STRATEGY } from '../auth.constants'

export const AccessGuard = () => UseGuards(AuthGuard(ACCESS_JWT_STRATEGY))
