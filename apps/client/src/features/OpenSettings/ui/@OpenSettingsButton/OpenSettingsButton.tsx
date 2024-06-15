import cl from './OpenSettingsButton.module.scss'

export const OpenSettingsButton = ({
	handleSettings
}: {
	handleSettings: () => void
}) => {
	return (
		<div className={cl.root}>
			<button onClick={handleSettings} className={cl.root__text}>
				<img
					draggable={false}
					style={{ width: '50px' }}
					src='/button-settings.png'
					alt='settings'
				/>
			</button>
		</div>
	)
}
