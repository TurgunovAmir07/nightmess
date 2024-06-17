import { SecondaryGameButton } from './@SecondaryGameButton/SecondaryGameButton'
import { PrimaryGameButton } from './@PrimaryGameButton/PrimaryGameButton'

export const GameButton = ({
	text,
	htmlType,
	onCLick,
	type,
	size,
	src,
	alt
}: {
	text: string
	onCLick?: () => void
	type: 'secondary' | 'primary'
	size: 'small' | 'middle' | 'large'
	src?: string
	alt?: string
	htmlType: 'submit' | 'button'
}) => {
	switch (type) {
		case 'secondary':
			return (
				<SecondaryGameButton
					htmlType={htmlType}
					src={src}
					alt={alt}
					text={text}
					onCLick={onCLick}
					size={size}
				/>
			)

		case 'primary':
			return (
				<PrimaryGameButton
					htmlType={htmlType}
					src={src}
					alt={alt}
					text={text}
					onCLick={onCLick}
					size={size}
				/>
			)
		default:
			return <></>
	}
}
