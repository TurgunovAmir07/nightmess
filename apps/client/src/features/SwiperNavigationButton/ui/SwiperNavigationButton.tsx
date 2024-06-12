import cl from './SwiperNavigationButton.module.scss'

export const SwiperNavigationButton = ({
  left,
  className,
}: {
  left?: boolean
  className: string
}) => {
  return (
    <div className={`${cl.root} ${className}`}>
      <button className={`${cl.root__text} ${left && cl.root__text_left}`}>
        <img
          className={cl.root__text_img}
          src="/СТРЕЛОЧКА RIGHT.png"
          alt="nav"
        />
      </button>
    </div>
  )
}
