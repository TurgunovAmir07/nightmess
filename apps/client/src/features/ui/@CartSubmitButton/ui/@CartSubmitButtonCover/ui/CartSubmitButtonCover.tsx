import { CartSubmitButtonMark } from './@CartSubmitButtonMark'
import cl from './CartSubmitButtonCover.module.scss'

export const CartSubmitButtonCover = ({ isNoIcon }: { isNoIcon?: boolean }) => {
  return (
    <div className={cl.root}>
      <div className={cl.root__wrap}>
        <img className={cl.root__wrap_cover} src="/SUBMIT.png" alt="submit" />
        {!isNoIcon && <CartSubmitButtonMark />}
      </div>
    </div>
  )
}
