import React from 'react'
import { StyledHeader } from './style'
import logo from '../../assets/logo.png'
import { StyledLinkHeader } from './LinkHeader'


export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="" />
        <nav>
          <StyledLinkHeader to={`/`}> Home </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> Champions </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> PAGE?? </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> PAGE?? </StyledLinkHeader>
          <StyledLinkHeader to={`/champions-page`}> LOGIN </StyledLinkHeader>
        </nav>

    </StyledHeader>
  )
}

