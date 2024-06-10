import {
  CartButton,
  MapButton,
  ProfileAuthButton,
  GamepadButton,
} from '../../../features'
import cl from './Header.module.scss'

export const Header = ({
  title,
  isMap,
}: {
  title: string
  isMap?: boolean
}) => {
  return (
    <div className={cl.root}>
      <div className={cl.root__header}>
        {isMap ? <GamepadButton /> : <MapButton />}
        <h1 className={cl.root__header__title}>{title}</h1>
        <ProfileAuthButton />
      </div>
      <CartButton removeTop />
    </div>
  )
}
