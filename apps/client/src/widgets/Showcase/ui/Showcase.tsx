import type { Key } from 'react'
import { Breadcumps } from '../../../features'
import { useCart } from '../../../store'
import { Product } from '../../Product'
import cl from './Showcase.module.scss'

export const Showcase = ({ count }: { count: number }) => {
  const { cart } = useCart()

  return (
    <div className={cl.root}>
      <div className={cl.root__content}>
        <div className={cl.root__content_item}>
          <h2 className={cl.root__content_item_title}>ЗАКАЗ #{count}</h2>
        </div>
        <div className={cl.root__content_item}>
          <h2 className={cl.root__content_item_text}>СТАТУС</h2>
          <Breadcumps />
          <h2 className={cl.root__content_item_text_noTop}>ТОВАРЫ:</h2>
          <div
            className={`${cl.root__content_item_products} ${
              cart.length === 0 && cl.root__content_item_products_empty
            }`}
          >
            {cart.length > 0 ? (
              cart.map(
                (
                  item: { product: { name: string; id: number; img: string } },
                  index: Key
                ) => (
                  <Product
                    key={index}
                    isShowCase
                    name={item.product.name}
                    id={item.product.id}
                    Icon={item.product.img}
                  />
                )
              )
            ) : (
              <h2 className={cl.root__content_item_text}>ПУСТО :(</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
