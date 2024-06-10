import cl from './GameButtonFrame.module.scss'

export const GameButtonFrame = () => (
  <img
    draggable={false}
    src="/ИгроваяКнопка.png"
    className={cl.root}
    alt="frame"
  />
)
