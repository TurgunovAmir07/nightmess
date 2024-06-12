import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'
import { REFRESH_JWT_STRATEGY } from '../auth.constants'
import { ConfigService } from '@nestjs/config'
import { Request } from 'express'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy, REFRESH_JWT_STRATEGY) {
	constructor(private readonly configService: ConfigService) {
		super({
			jwtFromRequest: RefreshJwtStrategy.getRefreshFromCookie,
			secretOrKey: configService.get('REFRESH_JWT_SECRET')
		})
	}

	public validate = (payload: unknown) => payload

	public static getRefreshFromCookie(req: Request) {
		return req.cookies['refresh']
	}
}
