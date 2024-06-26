import { authApi, gameApi, useTypedDispatch } from '@/store'
import cl from './LogoutButton.module.scss'

export const LogoutButton = () => {
	const dispatch = useTypedDispatch()

	// FIXME: запретить запрос инвентаря при отсутвствии токена

	const handleLogout = async () => {
		try {
			await dispatch(authApi.endpoints.logoutUser.initiate())
			dispatch(gameApi.util.invalidateTags(['Inventory']))
			dispatch(authApi.util.invalidateTags(['Auth']))
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={cl.root}>
			<button className={cl.root_btn} onClick={handleLogout}>
				LOGOUT
			</button>
		</div>
	)
}
