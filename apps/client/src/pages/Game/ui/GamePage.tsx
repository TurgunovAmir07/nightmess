import { useState } from 'react'
import { Container } from '../../../shared'
import { Swiper } from '../../../widgets/Swiper'
import { Topbar } from '../../../widgets/Topbar'
import cl from './GamePage.module.scss'
import { Points } from '../../../widgets/Points'
import {
  CartButton,
  CraftButton,
  HomeButton,
  InventoryButton,
  ShopButton,
} from '../../../features'
import { Stars } from '../../../widgets/Stars'
import { Skills } from '../../../widgets/Skills'

export const GamePage = () => {
  const [profile, setProfile] = useState(false)
  const [game, setGame] = useState(true)

  const handleProfile = () => {
    setGame(false)
    setProfile(true)
  }

  const handleGame = () => {
    setProfile(false)
    setGame(true)
  }

  return (
    <Container>
      <Topbar
        profile={profile}
        game={game}
        handleProfile={handleProfile}
        handleGame={handleGame}
      />
      <div className={cl.root}>
        <span className={cl.root__moon}>
          <img className={cl.root__moon_img} src="/MOON.png" alt="moon" />
        </span>
        <HomeButton />
        <Points />
        <CartButton />
        <Stars count={1} />
        <Swiper />
        <Skills />
        <div className={cl.root__footer}>
          <div className={cl.root__footer_button}>
            <InventoryButton />
          </div>
          <div className={cl.root__footer_button}>
            <CraftButton />
          </div>
          <div className={cl.root__footer_button}>
            <ShopButton />
          </div>
        </div>
      </div>
    </Container>
  )
}
