import { GameInputPen } from '../@GameInputPen/GameInputPen'
import cl from './GameInputFrame.module.scss'

export const GameInputFrame = () => {
  return (
    <>
      <button className={cl.root}>
        <img
          draggable={false}
          className={cl.root__frame}
          src="/рамка.png"
          alt="frame"
        />
        <GameInputPen />
      </button>
    </>
  )
}
