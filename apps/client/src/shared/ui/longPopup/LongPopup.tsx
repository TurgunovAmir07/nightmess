import cl from './LongPopup.module.scss'

export const LongPopup = ({
  children,
  isOpen,
  setIsOpen,
  title,
}: {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  title?: string
}) => {
  return (
    <>
      <span className={`${cl.blackout} ${isOpen && cl.blackout_open}`} />
      <div
        className={`${cl.root} ${isOpen && cl.root_open}`}
        onClick={() => setIsOpen(false)}
      >
        <div className={cl.root__content}>
          <div
            className={cl.root__content_header}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={cl.root__content_header_title}>{title}</div>
            <button
              onClick={() => setIsOpen(false)}
              className={cl.root__content_header__btn}
            >
              <img
                draggable={false}
                className={cl.root__content_header__btn__close}
                src="/CLOSE.png"
                alt="close"
              />
            </button>
          </div>
          <div
            className={cl.root__content__main}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={cl.root__content__main_children}>{children}</div>
          </div>
          <div
            className={cl.root__content_footer}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </>
  )
}
