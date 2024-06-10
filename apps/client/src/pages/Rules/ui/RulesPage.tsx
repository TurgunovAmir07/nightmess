import { Link } from 'react-router-dom'
import { Container } from '../../../shared'
import { Header } from '../../../widgets/Header'
import cl from './RulesPage.module.scss'

export const RulesPage = () => {
  return (
    <Container>
      <div className={cl.root}>
        <Header title="ПРАВИЛА ИГРЫ" />
        <div className={cl.root__textWrap}>
          <span className={cl.root__textWrap__text}>
            На карте есть 3 уровня липучек <br /> разделенных по редкости.
            <br /> Как только игрок достигает <br /> определенного уровня <br />
            он разблокирует липучку <br /> и получает возможность <br />
            заказать ее себе БЕСПЛАТНО.
          </span>
          <span className={cl.root__textWrap__text_small}>
            ! Липучки полностью совместимы со всей <br /> одеждой представленной
            в коллекции !
          </span>
          <h3 className={cl.root__textWrap__title}>КАК ПОЛУЧИТЬ ЛИПУЧКИ?</h3>
          <span className={cl.root__textWrap__text}>
            1. Получать каждый час <br /> случайную липучку <br /> в телеграмм
            боте <br />{' '}
            <span className={cl.root__textWrap__text_info}>
              *@nightmess_bot*
            </span>
          </span>
          <span className={cl.root__textWrap__text}>
            2. Имея 10 липучек <br /> одиннакового цвета <br /> вы можете отдать
            их <br /> в{' '}
            <span className={cl.root__textWrap__text_info}>*крафт*</span> и
            получить <br /> 1 липучку следующего уровня.
          </span>
          <span className={cl.root__textWrap__text}>
            3. В игре есть экономика <br /> липучкоинов. Вы можете <br />
            продавать и покупать липучки <br /> за местную валюту в
            <span className={cl.root__textWrap__text_info}>*магазине*.</span>
          </span>
          <span className={cl.root__textWrap__text_small}>
            ! Чтобы играть вы должны быть зарегистрированы !
          </span>
          <h3 className={cl.root__textWrap__title}>
            Также у игроков достигших <br /> уровня “Легендарный” есть <br />{' '}
            шанс получить случайную <br /> вещь из ассортимента. Удачи!
          </h3>
        </div>
        <div className={cl.root__footer}>
          <button className={cl.root__footer_btn}>
            <Link to="/info" className={cl.root__footer_btn_link}>
              INFO
            </Link>
          </button>
        </div>
      </div>
    </Container>
  )
}
