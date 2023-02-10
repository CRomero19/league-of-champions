import React from 'react'
import { StyledHeader } from './style'
import logo from '../../assets/logo.png'
import { StyledLinkHeader } from './LinkHeader'
/* import { GiHamburgerMenu } from 'react-icons/gi'
<GiHamburgerMenu color="white" fontSize="2rem"/> */
import { BurgerMenu } from '../BurgerMenu'
import { FaGlobe } from 'react-icons/fa'

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="CRIAR-LOGO//OU-UM-LINK-ESTILIZADO" />
      <BurgerMenu/>
        <nav>
          <StyledLinkHeader to={`/`}> Home </StyledLinkHeader>
          <StyledLinkHeader to={`/about`}> About League of legends </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> Champions </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> Guides </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> Profile </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> FeedbackSuggestions </StyledLinkHeader>
          <button> <FaGlobe color='white' size={25}/> Language {/* 'passar a linguagem' */}</button>
          {/* <StyledLinkHeader to={`/champions-page`}> logado ? LOGOUT : LOGIN </StyledLinkHeader>  */}
        </nav>

    </StyledHeader>
  )
}

