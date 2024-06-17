import cl from './PrimaryGameButton.module.scss'

export const PrimaryGameButton = ({
	src,
	alt,
	text,
	onCLick,
	size,
	htmlType
}: {
	src?: string
	alt?: string
	text: string
	size: 'small' | 'middle' | 'large'
	onCLick?: () => void
	htmlType: 'submit' | 'button'
}) => {
	switch (size) {
		case 'small':
			return (
				<button type={htmlType} onClick={onCLick} className={cl.root}>
					<div className={cl.root__content}>
						<div className={cl.root__content__text}>{text}</div>
						{!!src && (
							<img
								className={cl.root__content__img}
								src={src}
								alt={alt}
							/>
						)}
					</div>
				</button>
			)
		case 'middle':
			return (
				<button
					type={htmlType}
					onClick={onCLick}
					className={`${cl.root} ${cl.root_middle}`}
				>
					<div className={cl.root__content}>
						<div
							className={`${cl.root__content__text} ${cl.root__content__text_middle}`}
						>
							{text}
						</div>
						{!!src && (
							<img
								className={`${cl.root__content__img} ${cl.root__content__img_middle}`}
								src={src}
								alt={alt}
							/>
						)}
					</div>
				</button>
			)

		case 'large':
			return (
				<button
					type={htmlType}
					onClick={onCLick}
					className={`${cl.root} ${cl.root_large}`}
				>
					<div className={cl.root__content}>
						<div
							className={`${cl.root__content__text} ${cl.root__content__text_large}`}
						>
							{text}
						</div>
						{!!src && (
							<img
								className={`${cl.root__content__img} ${cl.root__content__img_large}`}
								src={src}
								alt={alt}
							/>
						)}
					</div>
				</button>
			)
		default:
			return <></>
	}
}
