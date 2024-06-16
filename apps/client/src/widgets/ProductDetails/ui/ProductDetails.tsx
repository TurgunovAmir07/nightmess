import { useParams } from 'react-router-dom'
import cl from './ProductDetails.module.scss'
import { productsData } from '@/shared'
import { useMemo } from 'react'
import { Product } from '@/entities/Product'

export const ProductDetails = () => {
	const { id } = useParams()

	const product = useMemo(() => {
		return productsData.find(item => item.id === Number(id))
	}, [id])

	return (
		<div className={cl.root}>
			{product && (
				<Product
					id={product.id}
					name={product.name}
					icon={product.img}
					price={product.price}
				/>
			)}
		</div>
	)
}
