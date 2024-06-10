import cl from './BreadcumpOrder.module.scss'

export const BreadcumpOrder = () => {
  return (
    <div className={cl.root}>
      <button className={cl.root__text}>
        <img
          className={cl.root__text_icon}
          draggable={false}
          src="/заказ.png"
          alt="order"
        />
      </button>
    </div>
  )
}
