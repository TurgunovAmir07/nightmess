import cl from './StatusLine.module.scss'

export const StatusLine = () => {
	return (
		<div className={cl.root}>
			<div className={cl.root__text}>
				<img
					draggable={false}
					style={{ width: '20px' }}
					src='/icon-line.png'
					alt='line'
				/>
			</div>
		</div>
	)
}
