import { useEffect } from 'react'
import { Input, LongPopup } from '../../../shared'
import cl from './Cart.module.scss'
import { CartSubmitButton } from '../../../features'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { CartProduct } from '../../../widgets/CartProduct'
import {
  CartSlice,
  OrderSlice,
  useActions,
  useCart,
  useTypedSelector,
} from '../../../store'
import { useDispatch } from 'react-redux'
import { cartFieldsArr } from './cartFields.data'

export const Cart = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}) => {
  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: FieldValues) => {
    dispatch(
      OrderSlice.actions.setOrder({
        items: cart,
        email: data.email,
        tel: data.tel,
        city: data.city,
        delivery: data.delivery,
        location: data.location,
        client: data.client,
        telegram: data.telegram,
        comment: data.comment,
        promotional_code: data.promotional_code,
        payment: data.payment,
        orderPrice: total + deliveryPrice,
      })
    )
  }

  const { order } = useTypedSelector((state) => state.order)
  const { userData } = useTypedSelector((state) => state.userData)

  const delivery = watch('delivery')

  let deliveryPrice = 0

  if (delivery === 'post_office') {
    deliveryPrice = 500
  } else if (delivery === 'cys') {
    deliveryPrice = 1100
  } else if (delivery === 'express') {
    deliveryPrice = 490
  }

  const city = watch('city')

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, setIsOpen])

  useEffect(() => {
    console.log(order)
  }, [order])

  const { cart, total } = useCart()

  const { removeFromCart } = useActions()

  const dispatch = useDispatch()

  const selectedDelivery = cartFieldsArr.find((item) => item.value === delivery)

  return (
    <div className={cl.root}>
      <LongPopup title={'КОРЗИНА'} isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit(onSubmit)} className={cl.root__content}>
          <div className={cl.root__content__products}>
            {cart.length === 0 ? (
              <h2 className={cl.root__content__products__title}>
                Корзина пуста :( <br />
                вы можете исправить это выбрав товар в магазине :D
              </h2>
            ) : (
              cart.map((item, index) => (
                <div className={cl.root__content__products__item} key={index}>
                  <div className={cl.root__content__products__item_container}>
                    <CartProduct
                      key={item.product.name}
                      name={item.product.name}
                      price={item.product.price}
                      img={item.product.img}
                      quantity={item.quantity}
                      minus={() =>
                        dispatch(
                          CartSlice.actions.changeQuantity({
                            id: item.id,
                            type: 'minus',
                          })
                        )
                      }
                      plus={() =>
                        dispatch(
                          CartSlice.actions.changeQuantity({
                            id: item.id,
                            type: 'plus',
                          })
                        )
                      }
                    />
                    <button
                      type="button"
                      onClick={() => removeFromCart({ id: item.product.id })}
                      className={
                        cl.root__content__products__item_container__delete
                      }
                    >
                      <img
                        className={
                          cl.root__content__products__item_container__delete_img
                        }
                        src="/DELETE.png"
                        alt="delete"
                      />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className={cl.root__content__total}>СУММА: {total} RUB</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              marginTop: '30px',
            }}
          >
            {cartFieldsArr.map((item, index) =>
              item.isRadio ? (
                <div key={index} className={cl.root__content__radioWrap}>
                  <label
                    className={`${
                      cl.root__content__radioWrap__delivery__label
                    } ${
                      errors[item.id] &&
                      cl.root__content__radioWrap__delivery__label_Err
                    }`}
                    id={item.id}
                  >
                    <input
                      type={item.type}
                      value={item.value}
                      defaultChecked={
                        userData[item.id as keyof typeof userData] ===
                        item.value
                      }
                      {...register(item.id, {
                        required: 'Пожалуйста выберите один из вариантов!',
                      })}
                    />
                    <span
                      className={
                        cl.root__content__radioWrap__delivery__label_textWrap
                      }
                    >
                      <span
                        className={`${
                          cl.root__content__radioWrap__delivery__label_textWrap_title
                        } ${
                          item.img &&
                          cl.root__content__radioWrap__delivery__label_textWrap_title_removeMaxW
                        }`}
                      >
                        {item.label}
                        {item.img && (
                          <img style={{ width: '60px' }} src={item.img} />
                        )}
                      </span>
                      <span
                        className={
                          cl.root__content__radioWrap__delivery__label_textWrap_description
                        }
                      >
                        {item.description}
                      </span>
                    </span>
                  </label>
                  <span
                    className={
                      cl.root__content__radioWrap__delivery__label_error
                    }
                  >
                    {errors[item.id]?.message?.toString()}
                  </span>
                </div>
              ) : (
                <Controller
                  name={item.name ? item.name : ''}
                  control={control}
                  key={item.label}
                  rules={item.rules}
                  defaultValue={userData[item.name as keyof typeof userData]}
                  render={({ field }) => (
                    <Input
                      field={field}
                      error={errors[item.name ? item.name : '']?.message}
                      label={item.label}
                      type={item.type}
                      placeholder={item.placeholder}
                    />
                  )}
                />
              )
            )}
          </div>
          <div className={cl.root__content__orderInfo}>
            <span className={cl.root__content__orderInfo_text}>
              Сумма: {total} RUB.
            </span>
            <span className={cl.root__content__orderInfo_text}>
              Доставка: (
              {selectedDelivery ? selectedDelivery.label : 'не выбрано'}):
              {' ' + deliveryPrice} RUB.
            </span>
            <span className={cl.root__content__orderInfo_text}>
              Россия, {city ? 'г.' + city : 'город не выбран'}
            </span>
            <span className={cl.root__content__orderInfo_total}>
              Итоговая сумма: {total + deliveryPrice} RUB.
            </span>
          </div>
          <div className={cl.root__content_submitBtn}>
            <CartSubmitButton title="ЗАКАЗАТЬ" />
          </div>
        </form>
      </LongPopup>
    </div>
  )
}
