import React from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledLandingPage } from './style'

export const LandingPage = () => {
  const navigate = useNavigate()

  const goToHeroes = (event) =>{
    event.preventDefault()

    navigate('./champions-page')
  }

  return (
    <StyledLandingPage>
      <div className='main-content'>
        <h1>LOGO AQUI</h1>
        <button onClick={goToHeroes}> HEROIS AQUI! </button>
      </div>
    </StyledLandingPage>
  )
}
