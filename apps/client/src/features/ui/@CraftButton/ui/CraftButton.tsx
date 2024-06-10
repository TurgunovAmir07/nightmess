import cl from './CraftButton.module.scss'

export const CraftButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className={cl.root}>
      <button onClick={onClick} className={cl.root__btn}>
        <span className={cl.root__btn_text}>CRAFT</span>
      </button>
    </div>
  )
}
