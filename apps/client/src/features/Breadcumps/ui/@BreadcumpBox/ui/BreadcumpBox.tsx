import cl from './BreadcumpBox.module.scss'

export const BreadcumpBox = () => {
  return (
    <div className={cl.root}>
      <button className={cl.root__text}>
        <img
          className={cl.root__text_icon}
          draggable={false}
          src="/коробка.png"
          alt="box"
        />
      </button>
    </div>
  )
}
