import type { IUser } from './user.model'

export interface RefreshResponse {
	accessToken: string
	profile: IUser
}
