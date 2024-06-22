import { authApi, useTypedDispatch } from '@/store'
import cl from './LogoutButton.module.scss'

export const LogoutButton = () => {
	const dispatch = useTypedDispatch()

	const handleLogout = async () => {
		try {
			await dispatch(authApi.endpoints.logoutUser.initiate())
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
