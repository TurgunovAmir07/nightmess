import { StarsList } from '../@StarsList/StarsList'
import cl from './Stars.module.scss'

export const Stars = ({ count }: { count: string }) => {
	switch (count) {
		case 'NULL':
			return (
				<div className={cl.root}>
					<div className={cl.root__wrap}>
						<img
							draggable={false}
							className={cl.root__wrap_img}
							src='/illustration-rating.png'
							alt='stars-back'
						/>
						<StarsList count={0} />
						<img
							draggable={false}
							className={cl.root__wrap_text}
							src='/illustration-card-name-dead.png'
							alt='stars-text'
						/>
					</div>
				</div>
			)

		case 'ONE':
			return (
				<div className={cl.root}>
					<div className={cl.root__wrap}>
						<img
							draggable={false}
							className={cl.root__wrap_img}
							src='/illustration-rating.png'
							alt='stars-back'
						/>
						<StarsList count={1} />
						<img
							draggable={false}
							className={cl.root__wrap_text}
							src='/illustration-rating-text.png'
							alt='stars-text'
						/>
					</div>
				</div>
			)

		case 'TWO':
			return (
				<div className={cl.root}>
					<div className={cl.root__wrap}>
						<img
							draggable={false}
							className={cl.root__wrap_img}
							src='/illustration-rating.png'
							alt='stars-back'
						/>
						<StarsList count={2} />
						<img
							draggable={false}
							className={cl.root__wrap_text}
							src='/illustration-card-name-mess.png'
							alt='stars-text'
						/>
					</div>
				</div>
			)
		case 'THREE':
			return (
				<div className={cl.root}>
					<div className={cl.root__wrap}>
						<img
							draggable={false}
							className={cl.root__wrap_img}
							src='/illustration-rating.png'
							alt='stars-back'
						/>
						<StarsList count={3} />
						<img
							draggable={false}
							className={cl.root__wrap_text}
							src='/illustration-card-name-dead.png'
							alt='stars-text'
						/>
					</div>
				</div>
			)
		default:
			return (
				<div className={cl.root}>
					<div className={cl.root__wrap}>
						<img
							draggable={false}
							className={cl.root__wrap_img}
							src='/illustration-rating.png'
							alt='stars-back'
						/>
						<StarsList count={0} />
						<img
							draggable={false}
							className={cl.root__wrap_text}
							src='/illustration-card-name-dead.png'
							alt='stars-text'
						/>
					</div>
				</div>
			)
	}
}
