import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { GOOGLE_OAUTH_STRATEGY } from '../auth.constants'

export const GoogleOAuthGuard = () => UseGuards(AuthGuard(GOOGLE_OAUTH_STRATEGY))
