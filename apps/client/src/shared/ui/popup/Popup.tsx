import { useEffect, type ReactNode } from 'react'
import cl from './Popup.module.scss'

export const Popup = ({
  children,
  isOpen,
  setIsOpen,
  title,
  isLongTitle,
}: {
  children: ReactNode
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  title?: string
  isLongTitle?: boolean
}) => {
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

  return (
    <>
      <span className={`${cl.blackout} ${isOpen && cl.blackout_open}`} />
      <div
        className={`${cl.root} ${isOpen && cl.root_open}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`${cl.root__content} ${isOpen && cl.root__content_open}`}
        >
          <div
            className={cl.root__content_header}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`${cl.root__content_header_title} ${
                isLongTitle && cl.root__content_header_title_long
              }`}
            >
              {title}
            </div>
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
