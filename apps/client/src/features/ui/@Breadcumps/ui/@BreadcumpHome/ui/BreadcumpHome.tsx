import cl from './BreadcumpHome.module.scss'

export const BreadcumpHome = () => {
  return (
    <div className={cl.root}>
      <button className={cl.root__text}>
        <img
          className={cl.root__text_icon}
          draggable={false}
          src="/дом.png"
          alt="home"
        />
      </button>
    </div>
  )
}
