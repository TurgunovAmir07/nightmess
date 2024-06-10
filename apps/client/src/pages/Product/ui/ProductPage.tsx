import { Link, useParams } from 'react-router-dom'
import { itemsArr } from '../../../data/mainProducts.data'
import { Container, GameButton } from '../../../shared'
import { Product } from '../../../widgets/Product'
import cl from './ProductsPage.module.scss'
import { useCart, useActions } from '../../../store'

export const ProductPage = () => {
  const { id } = useParams()
  const product = itemsArr.find((item) => item.id === Number(id))

  const { addToCart } = useActions()

  const { cart } = useCart()

  return (
    <Container>
      <div className={cl.root}>
        {product && (
          <>
            <Product
              id={product.id}
              name={product.name}
              Icon={product.img}
              price={product.price}
            />
            <div className={cl.root__btn}>
              <GameButton
                noIcon
                text={
                  cart.find((item) => item.product.id === product.id)
                    ? 'Добавлено'
                    : 'В корзину'
                }
                onCLick={() =>
                  addToCart({
                    product: {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      img: product.img,
                    },
                    quantity: 1,
                  })
                }
              />
            </div>
          </>
        )}
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <Link to="/">главная</Link>
          <Link to="/profile">профиль</Link>
        </div>
      </div>
    </Container>
  )
}
