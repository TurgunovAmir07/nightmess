import cl from './Points.module.scss'

export const Points = () => {
  return (
    <div className={cl.root}>
      <div className={cl.root__wrap}>
        <img
          draggable={false}
          className={cl.root__wrap_img}
          src="/POINTS_BACK.png"
          alt="points"
        />
        <div className={cl.root__wrap_text}>
          100{' '}
          <img
            draggable={false}
            className={cl.root__wrap_text_img}
            src="/COINS.png"
            alt="coins"
          />
        </div>
        <div className={cl.root__wrap_text}>
          100{' '}
          <img
            draggable={false}
            className={cl.root__wrap_text_img}
            src="/GEMS.png"
            alt="coins"
          />
        </div>
      </div>
    </div>
  )
}
