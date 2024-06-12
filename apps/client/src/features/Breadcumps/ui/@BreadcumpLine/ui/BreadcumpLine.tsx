import cl from './BreadcumpLine.module.scss'

export const BreadcumpLine = () => {
  return (
    <div className={cl.root}>
      <div className={cl.root__text}>
        <img
          draggable={false}
          style={{ width: '20px' }}
          src="/линия.png"
          alt="line"
        />
      </div>
    </div>
  )
}
