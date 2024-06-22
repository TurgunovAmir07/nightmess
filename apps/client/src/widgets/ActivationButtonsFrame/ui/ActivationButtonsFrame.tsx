import { ActivateEmailButton } from '@/features/ActivateEmail'
import cl from './ActivationButtonsFrame.module.scss'
import { ActivateGoogleButton } from '@/features/ActivateGoogle'
import { ActivateVkButton } from '@/features/ActivateVk'

export const ActivationButtonsFrame = ({ isAuth }: { isAuth: boolean }) => {
	return (
		<div className={`${cl.root} ${!isAuth && cl.root_notAuth}`}>
			{isAuth && <h2 className={cl.root_title}>ПРИВЯЗАТЬ</h2>}
			<div className={cl.root_btns}>
				<ActivateEmailButton />
				<ActivateGoogleButton />
				<ActivateVkButton />
			</div>
		</div>
	)
}
