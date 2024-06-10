import cl from './GameButton.module.scss'
import { GameButtonFrame } from './@GameButtonFrame/GameButtonFrame'
export const GameButton = ({
  text,
  Icon,
  onCLick,
  noIcon,
}: {
  noIcon?: boolean
  text: string
  Icon?: string
  onCLick?: () => void
}) => (
  <>
    <button className={cl.root} onClick={onCLick}>
      <GameButtonFrame />
      <div className={cl.root__link}>
        <div
          className={`${cl.root__link_text} ${
            noIcon ? cl.root__link_text_noIcon : ''
          }`}
        >
          {text}
        </div>
        <div className={cl.root__link__icon}>
          {Icon && (
            <img src={Icon} alt="icon" className={cl.root__link__icon_img} />
          )}
        </div>
      </div>
    </button>
  </>
)
