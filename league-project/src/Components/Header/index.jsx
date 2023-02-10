import React from 'react'
import { StyledHeader } from './style'
import logo from '../../assets/logo.png'
import { StyledLinkHeader } from './LinkHeader'
/* import { GiHamburgerMenu } from 'react-icons/gi'
<GiHamburgerMenu color="white" fontSize="2rem"/> */
import { BurgerMenu } from '../BurgerMenu'
import { FaGlobe } from 'react-icons/fa'
import { NavBar } from '../NavItems'

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="CRIAR-LOGO//OU-UM-LINK-ESTILIZADO" />
      <BurgerMenu/>

      <NavBar/>

    </StyledHeader>
  )
}

