import { ActivateEmailButton } from '@/features/ActivateEmail'
import cl from './OAuthFrame.module.scss'
import { ActivateGoogleButton } from '@/features/ActivateGoogle'
import { ActivateVkButton } from '@/features/ActivateVk'

export const OAuthFrame = () => {
	return (
		<div className={cl.root}>
			<h2 className={cl.root_title}>ПРИВЯЗАТЬ</h2>
			<div className={cl.root_btns}>
				<ActivateEmailButton />
				<ActivateGoogleButton />
				<ActivateVkButton />
			</div>
		</div>
	)
}
