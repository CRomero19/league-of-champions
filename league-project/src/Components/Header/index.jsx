import React from 'react'
import { StyledHeader } from './style'
import logo from '../../assets/logo.png'
import { StyledLinkHeader } from './LinkHeader'
import { GiHamburgerMenu } from 'react-icons/gi'


export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="CRIAR-LOGO//OU-UM-LINK-ESTILIZADO" />
      <div className='hamburger-menu'>
        
        <GiHamburgerMenu color="white" fontSize="2rem"/>
      </div>
        <nav>
          <StyledLinkHeader to={`/`}> Home </StyledLinkHeader>
          <StyledLinkHeader to={`/about`}> About League of legends </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> Champions </StyledLinkHeader>
          <StyledLinkHeader to={`/loading`}> LOADING PAGE </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> logado ? LOGOUT : LOGIN </StyledLinkHeader>
        </nav>

    </StyledHeader>
  )
}

