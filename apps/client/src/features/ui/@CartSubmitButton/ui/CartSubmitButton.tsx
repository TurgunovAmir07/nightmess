import { CartSubmitButtonCover } from './@CartSubmitButtonCover'
import cl from './CartSubmitButton.module.scss'

export const CartSubmitButton = ({
  onClick,
  title,
  isNoIcon,
}: {
  onClick?: () => void
  title: string
  isNoIcon?: boolean
}) => {
  return (
    <button onClick={onClick} type="submit" className={cl.root}>
      <CartSubmitButtonCover isNoIcon={isNoIcon} />
      <span className={`${cl.root__text} ${isNoIcon && cl.root__text_noIcon}`}>
        {title}
      </span>
    </button>
  )
}
