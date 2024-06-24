import cl from './SettingsHeader.module.scss'

export const SettingsHeader = () => {
	return (
		<div className={cl.root}>
			<h2 className={cl.root_title}>ДАННЫЕ ДЛЯ ЗАКАЗОВ</h2>
			<span className={cl.root_description}>
				ВВЕДИТЕ ДЛЯ АВТОЗАПОЛНЕНИЯ <br /> ПРИ СЛЕДУЮЩИХ ЗАКАЗАХ
			</span>
		</div>
	)
}
