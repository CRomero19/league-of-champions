import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLandingPage } from './style'

export const LandingPage = () => {
  
  return (
    <StyledLandingPage>
      <div className='main-content'>
        <h1>LOGO AQUI</h1>
        <Link to={`/champions-page`}> <button> HEROIS AQUI! </button> </Link>
      </div>
    </StyledLandingPage>
  )
}
