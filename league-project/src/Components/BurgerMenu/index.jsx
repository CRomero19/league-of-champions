import React, {useState} from 'react'
import { StyledBurgerMenu } from './style'
import { StyledLinkBurger } from './LinkBurger'
import { FaGlobe } from 'react-icons/fa'


export const BurgerMenu = () => {
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
    <StyledBurgerMenu onClick={updateMenu}>
      <div className='menu-burger'>
        <div className='bar'> </div>
        <div className='bar'> </div>
        <div className='bar'> </div>
      </div>
      
      <div className={menuClass}>
          <StyledLinkBurger to={`/`}> Home </StyledLinkBurger>
          <StyledLinkBurger to={`/about`}> About League of legends </StyledLinkBurger>
          <StyledLinkBurger to={`/champions-page`}> Champions </StyledLinkBurger>
         {/*  <StyledLinkBurger to={`/guides`}> Guides </StyledLinkBurger>
          <StyledLinkBurger to={`/profile`}> Profile </StyledLinkBurger> */}
          <StyledLinkBurger to={`/feedback`}> Feedback </StyledLinkBurger>
          {/* <button> <FaGlobe color='white' size={25}/> Language </button> */}
          {/* <StyledLinkHeader to={`/champions-page`}> logado ? LOGOUT : LOGIN </StyledLinkHeader>  */}
      </div>
    </StyledBurgerMenu>
  )
}

