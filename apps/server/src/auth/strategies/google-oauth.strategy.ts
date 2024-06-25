import { PassportStrategy } from '@nestjs/passport'
import { Strategy, Profile } from 'passport-google-oauth20'
import { GOOGLE_OAUTH_STRATEGY } from '../auth.constants'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { AuthService } from '../auth.service'
import { UserAchievementService } from '@/modules/user/user-achievement.service'

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy, GOOGLE_OAUTH_STRATEGY) {
	constructor(
		private readonly configService: ConfigService,
		private readonly authService: AuthService,
		private readonly userAchievementService: UserAchievementService
	) {
		super({
			clientID: configService.get('GOOGLE_CLIENT_ID'),
			clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
			callbackURL: configService.get('VITE_GOOGLE_REDIRECT_URL'),
			scope: ['email', 'profile']
		})
	}

	public async validate(
		accessToken: string,
		refreshToken: string,
		{ displayName, emails }: Profile
	) {
		const user = await this.authService
			.validateUser({
				email: emails[0].value,
				name: displayName.split(' ')[0]
			})
			.then(async res => {
				await this.userAchievementService.create(res)
				return res
			})
		return user || null
	}
}
