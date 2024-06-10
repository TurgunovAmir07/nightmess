import { GameButton } from '../../../../shared'
import cl from './OAuthVkPopup.module.scss'

export const OAuthVkPopup = () => {
  return (
    <div className={cl.root}>
      <GameButton text={'привязать'} Icon="/vk.png" />
    </div>
  )
}
