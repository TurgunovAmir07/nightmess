import cl from './RatingTop.module.scss'
import { useGetRatingQuery } from '@/store'

export const RatingTop = () => {
	const { data } = useGetRatingQuery()

	return (
		<div className={cl.root}>
			{data?.map((item, index) => (
				<div key={index} className={cl.root_text}>
					{`${item.place}. ${item.name}`}
				</div>
			))}
		</div>
	)
}
