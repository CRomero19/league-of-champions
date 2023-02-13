import React, { useState } from 'react'
import {StyledNavBar} from './style'
import { StyledNavBarLink } from './NavBarLinkDesktop'
import { FaGlobe } from 'react-icons/fa'
import { StyledNavBarMobile } from './NavBarLinkMobile'

export const NavBar = () => {
  const [menuClass, setMenuClass] = useState('menu hidden')
  const [menuStatus, setMenuStatus] = useState(false)

  const updateMenu = () => {
    if(!menuStatus){
      setMenuClass('menu visible')
    }
    else{
      setMenuClass('menu hidden')
    }
    setMenuStatus(!menuStatus)
  }

  return (
       <StyledNavBar>

          <div className='menu-burger' onClick={updateMenu}>
            <div className='bar'> </div>
            <div className='bar'> </div>
            <div className='bar'> </div>
          </div>

          <div className={menuClass}>
            <StyledNavBarMobile to={`/`}> Home </StyledNavBarMobile>
            <StyledNavBarMobile to={`/about`}> About League of legends </StyledNavBarMobile>
            <StyledNavBarMobile to={`/champions-page`}> Champions </StyledNavBarMobile>
            {/* <StyledNavBarMobile to={`/guides`}> Guides </StyledNavBarMobile>
            <StyledNavBarMobile to={`/profile`}> Profile </StyledNavBarMobile> */}
            <StyledNavBarMobile to={`/feedback`}> Feedback </StyledNavBarMobile>
            {/* <button> <FaGlobe color='white' size={25}/> Language 'passar a linguagem'</button> */}
            {/* <StyledLinkHeader to={`/champions-page`}> logado ? LOGOUT : LOGIN </StyledLinkHeader>  */}
          </div>

          <div className='menu-desktop'>
            <StyledNavBarLink to={`/`}> Home </StyledNavBarLink>
            <StyledNavBarLink to={`/about`}> About League of legends </StyledNavBarLink>
            <StyledNavBarLink to={`/champions-page`}> Champions </StyledNavBarLink>
            {/* <StyledNavBarLink to={`/guides`}> Guides </StyledNavBarLink>
            <StyledNavBarLink to={`/profile`}> Profile </StyledNavBarLink> */}
            <StyledNavBarLink to={`/feedback`}> Feedback </StyledNavBarLink>
            {/* <button> <FaGlobe color='white' size={25}/> Language 'passar a linguagem'</button> */}
            {/* <StyledLinkHeader to={`/champions-page`}> logado ? LOGOUT : LOGIN </StyledLinkHeader>  */}
          </div>

       </StyledNavBar>
  )
}


