import { StarsList } from './@StarsList/StarsList'
import cl from './Stars.module.scss'

export const Stars = ({ count }: { count: number }) => {
	return (
		<div className={cl.root}>
			<div className={cl.root__wrap}>
				<img
					draggable={false}
					className={cl.root__wrap_img}
					src='/illustration-rating.png'
					alt='stars-back'
				/>
				<StarsList count={count} />
				<img
					draggable={false}
					className={cl.root__wrap_text}
					src='/illustration-rating-text.png'
					alt='stars-text'
				/>
			</div>
		</div>
	)
}
