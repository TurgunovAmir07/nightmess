import cl from './GameButtonIcon.module.scss'

export const GameButtonIcon = ({ img, alt }: { img: string; alt: string }) => (
  <img draggable={false} className={cl.root} src={img} alt={alt} />
)
