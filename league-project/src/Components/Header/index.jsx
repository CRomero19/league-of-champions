import React from 'react'
import { StyledHeader } from './style'
import logo from '../../assets/logo.png'
import { StyledLinkHeader } from './LinkHeader'


export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="CRIAR-LOGO//OU-UM-LINK-ESTILIZADO" />
        <nav>
          <StyledLinkHeader to={`/`}> Home </StyledLinkHeader>
          <StyledLinkHeader to={`/about`}> About League of legends </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> Champions </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> LOGADO && PERFIL </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> logado ? LOGOUT : LOGIN </StyledLinkHeader>
        </nav>

    </StyledHeader>
  )
}

