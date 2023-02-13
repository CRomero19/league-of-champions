import React from 'react'
import { StyledHeader } from './style'
import logo from '../../assets/logo.png'
import { StyledLinkHeader } from './LinkHeader'
/* import { GiHamburgerMenu } from 'react-icons/gi'
<GiHamburgerMenu color="white" fontSize="2rem"/> */
import { FaGlobe } from 'react-icons/fa'
import { NavBar } from '../NavBar'

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="CRIAR-LOGO//OU-UM-LINK-ESTILIZADO" />

      <NavBar/>

    </StyledHeader>
  )
}

