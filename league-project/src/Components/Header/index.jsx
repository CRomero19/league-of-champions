import React from 'react'
import { StyledHeader } from './style'
import logo from '../../assets/logo.png'
import { StyledLinkHeader } from './LinkHeader'
/* import { GiHamburgerMenu } from 'react-icons/gi'
<GiHamburgerMenu color="white" fontSize="2rem"/> */
import { BurgerMenu } from '../BurgerMenu'

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="CRIAR-LOGO//OU-UM-LINK-ESTILIZADO" />
      <BurgerMenu/>
        <nav>
          <StyledLinkHeader to={`/`}> Home </StyledLinkHeader>
          <StyledLinkHeader to={`/about`}> About League of legends </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> Champions </StyledLinkHeader>
          {/* <StyledLinkHeader to={`/champions-page`}> logado ? LOGOUT : LOGIN </StyledLinkHeader>  */}
        </nav>

    </StyledHeader>
  )
}

