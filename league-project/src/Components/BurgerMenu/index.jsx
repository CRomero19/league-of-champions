import React, {useState} from 'react'
import { StyledBurgerMenu } from './style'
import { StyledLinkBurger } from './LinkBurger'

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
        <div className='bar'> </div>
      </div>
      
      <div className={menuClass}>
          <StyledLinkBurger to={`/`}> Home </StyledLinkBurger>
          <StyledLinkBurger to={`/about`}> About League of legends </StyledLinkBurger>
          <StyledLinkBurger to={`/champions-page`}> Champions </StyledLinkBurger>
      </div>
    </StyledBurgerMenu>
  )
}

