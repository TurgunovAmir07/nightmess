import cl from './Topbar.module.scss'
import { Link } from 'react-router-dom'

export const Topbar = ({
  profile,
  game,
  handleProfile,
  handleGame,
}: {
  profile: boolean
  game: boolean
  handleProfile: () => void
  handleGame: () => void
}) => {
  return (
    <div className={cl.root}>
      <div className={cl.root__container}>
        <div
          className={`${cl.root__container__item} ${
            game && cl.root__container__item_active
          }`}
        >
          <label className={cl.root__container__item_label}>
            <Link style={{ textDecoration: 'none' }} to="/game">
              <input
                checked={game}
                onChange={handleGame}
                className={cl.root__container__item_label__radio}
                type="radio"
                name="topbar"
              />
              <span
                className={cl.root__container__item_label__text}
                style={{ color: '#fff' }}
              >
                GAME
              </span>
            </Link>
          </label>
        </div>
        <div
          className={`${cl.root__container__item} ${
            profile && cl.root__container__item_active
          }`}
        >
          <label className={cl.root__container__item_label}>
            <Link style={{ textDecoration: 'none' }} to="/profile">
              <input
                checked={profile}
                onChange={handleProfile}
                className={cl.root__container__item_label__radio}
                type="radio"
                name="topbar"
              />
              <span
                style={{ color: '#fff' }}
                className={cl.root__container__item_label__text}
              >
                PROFILE
              </span>
            </Link>
          </label>
        </div>
      </div>
    </div>
  )
}
