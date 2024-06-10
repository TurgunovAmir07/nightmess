import { Container } from '../../../shared'
import { Header } from '../../../widgets/Header'
import cl from './MapPage.module.scss'

export const MapPage = () => {
  return (
    <Container>
      <div className={cl.root}>
        <Header isMap title="КАРТА" />
        <div className={cl.root__main}>
          <img
            draggable={false}
            className={cl.root__main__legs}
            src="/legs.png"
            alt="legs"
          />

          <button className={cl.root__main__btn}>
            <img
              draggable={false}
              className={cl.root__main__btn__redX}
              src="/red_x.png"
              alt="x"
            />
          </button>
          <button className={cl.root__main__btn}>
            <img
              draggable={false}
              className={cl.root__main__btn__yellowX}
              src="/yellow_x.png"
              alt="x"
            />
          </button>
          <button className={cl.root__main__btn}>
            <img
              draggable={false}
              className={cl.root__main__btn__greenX}
              src="/green_x.png"
              alt="x"
            />
          </button>

          <button className={cl.root__main__btn}>
            <img
              draggable={false}
              className={cl.root__main__btn__cjanX}
              src="/cjan_x.png"
              alt="x"
            />
          </button>
        </div>
        <div className={cl.root__footer}>
          <img
            draggable={false}
            className={cl.root__footer_img}
            src="/map_footer.png"
            alt="map_footer"
          />
          <div className={cl.root__footer__top}>
            <div className={cl.root__footer__top_text}>1. nickname</div>
            <div className={cl.root__footer__top_text}>2. nickname</div>
            <div className={cl.root__footer__top_text}>3. nickname</div>
            <div className={cl.root__footer__top_text}>4. nickname</div>
          </div>
          <div className={cl.root__footer_name}>nickname</div>
        </div>
      </div>
    </Container>
  )
}
