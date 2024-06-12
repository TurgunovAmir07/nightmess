import { Link } from 'react-router-dom'
import cl from './MapButton.module.scss'

export const MapButton = () => {
  return (
    <div className={cl.root}>
      <button className={cl.root__text}>
        <Link to="/map">
          <img
            draggable={false}
            style={{ width: '50px' }}
            src="/MAP.png"
            alt="map"
          />
        </Link>
      </button>
    </div>
  )
}
