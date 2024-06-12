import {
	BadRequestException,
	ClassSerializerInterceptor,
	Controller,
	Get,
	Param,
	Res,
	UnauthorizedException,
	UseInterceptors
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { CookieOptions, Response } from 'express'
import { RefreshGuard } from './guards'
import { Cookie, User } from '@/common/decorators'
import { ConfigService } from '@nestjs/config'
// import type { TRefreshResponse } from '@/contracts/auth'

@Controller('auth')
export class AuthController {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigService
	) {}

	private readonly refreshCookieOptions: CookieOptions = {
		httpOnly: true,
		maxAge: 30 * 24 * 60 * 60 * 1000,
		path: '/api/auth'
	}

	@Get('refresh')
	@RefreshGuard()
	@UseInterceptors(ClassSerializerInterceptor)
	public async refresh(
		@Cookie('refresh') refresh: string,
		@User('id') userId: number,
		@Res({ passthrough: true }) res: Response
	) {
		const data = await this.authService.refresh(refresh, userId)

		if (!data) {
			res.clearCookie('refresh', {
				path: this.refreshCookieOptions.path
			})
			throw new UnauthorizedException()
		}

		const {
			tokens: { accessToken },
			profile
		} = data

		res.cookie('refresh', this.refreshCookieOptions)

		return { accessToken, profile }
	}

	@Get('confirm/:link')
	public async createSession(
		@Param('link') link: string,
		@Res({ passthrough: true }) res: Response
	) {
		const refreshToken = await this.authService.createSession(link)

		if (!refreshToken) {
			res.clearCookie('refresh', { path: this.refreshCookieOptions.path })
			throw new BadRequestException('Ссылка невалидна!')
		}

		res.cookie('refresh', refreshToken, this.refreshCookieOptions)

		return res.redirect(this.configService.get('CLIENT_URL'))
	}
}
