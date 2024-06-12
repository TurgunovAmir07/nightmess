import { BadRequestException, Controller, Get, Param, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CookieOptions, Response } from 'express'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	private readonly refreshCookieOptions: CookieOptions = {
		httpOnly: true,
		maxAge: 30 * 24 * 60 * 60 * 1000,
		path: '/api/auth'
	}

	@Get(':link')
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

		return res.redirect('https://ya.ru')
	}
}
