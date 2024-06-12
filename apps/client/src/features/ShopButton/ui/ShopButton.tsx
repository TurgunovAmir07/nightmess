import cl from './ShopButton.module.scss'

export const ShopButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className={cl.root}>
      <button onClick={onClick} className={cl.root__btn}>
        <img
          draggable={false}
          className={cl.root__btn_img}
          src="/SHOP.png"
          alt="shop"
        />
      </button>
    </div>
  )
}
