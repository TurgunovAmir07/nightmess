import {
	BadRequestException,
	ClassSerializerInterceptor,
	Controller,
	Get,
	HttpCode,
	Param,
	Query,
	Res,
	UnauthorizedException,
	UseInterceptors,
	UsePipes
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { CookieOptions, Response } from 'express'
import { RefreshGuard } from './guards'
import { Cookie, User } from '@/common/decorators'
import { ConfigService } from '@nestjs/config'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ZodValidationPipe } from '@/common/pipes'
import { confirmDto } from './dto'
import { EZodPipeType } from '@/common/enums'
// import type { TRefreshResponse } from '@/contracts/auth'

@ApiTags('Авторизация')
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

	@ApiOperation({
		summary: 'Обновление токенов'
	})
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
			tokens: { accessToken, refreshToken },
			profile
		} = data

		res.cookie('refresh', refreshToken, this.refreshCookieOptions)

		return { accessToken, profile }
	}

	@ApiOperation({
		summary: 'Создание сессии при переходе по ссылке'
	})
	@UsePipes(new ZodValidationPipe(confirmDto, EZodPipeType.query))
	@Get('confirm/:link')
	public async createSession(
		@Param('link') link: string,
		@Res({ passthrough: true }) res: Response,
		@Query('type') type?: string
	) {
		const refreshToken = await this.authService.createSession(link)

		if (!refreshToken) {
			res.clearCookie('refresh', { path: this.refreshCookieOptions.path })
			throw new BadRequestException('Ссылка невалидна!')
		}

		res.cookie('refresh', refreshToken, this.refreshCookieOptions)

		if (type === 'webapp') {
			return res.redirect(this.configService.get('WEBAPP_URL'))
		}

		return res.redirect(this.configService.get('CLIENT_URL'))
	}

	@ApiOperation({
		summary: 'Выход из профиля'
	})
	@HttpCode(204)
	@Get('logout')
	public async logout(
		@Cookie('refresh') refresh: string,
		@Res({ passthrough: true }) res: Response
	) {
		await this.authService.logout(refresh)
		res.clearCookie('refresh', { path: this.refreshCookieOptions.path })
		return
	}
}
