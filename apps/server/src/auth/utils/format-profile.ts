import { UserEntity } from '@/modules/user/entities'

export const formatProfile = (user: UserEntity) => {
	const { tg_id, ...data } = user
	return { ...data, isHasTelegram: !!tg_id }
}
