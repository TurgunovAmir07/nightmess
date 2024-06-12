import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ACCESS_JWT_STRATEGY } from '../auth.constants'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AccessJwtStrategy extends PassportStrategy(Strategy, ACCESS_JWT_STRATEGY) {
	constructor(private readonly configService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get('ACCESS_JWT_SECRET')
		})
	}

	public validate = (payload: unknown) => payload
}
