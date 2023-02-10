import React from 'react'
import {StyledNavBar} from './style'
import { StyledNavBarLink } from './NavBarLink'
import { FaGlobe } from 'react-icons/fa'

export const NavBar = () => {

  return (
       <StyledNavBar>
          <StyledNavBarLink to={`/`}> Home </StyledNavBarLink>
          <StyledNavBarLink to={`/about`}> About League of legends </StyledNavBarLink>
          <StyledNavBarLink to={`/champions-page`}> Champions </StyledNavBarLink>
          {/* <StyledNavBarLink to={`/guides`}> Guides </StyledNavBarLink>
          <StyledNavBarLink to={`/profile`}> Profile </StyledNavBarLink> */}
          <StyledNavBarLink to={`/feedback`}> Feedback </StyledNavBarLink>
          {/* <button> <FaGlobe color='white' size={25}/> Language 'passar a linguagem'</button> */}
          {/* <StyledLinkHeader to={`/champions-page`}> logado ? LOGOUT : LOGIN </StyledLinkHeader>  */}
       </StyledNavBar>
  )
}


