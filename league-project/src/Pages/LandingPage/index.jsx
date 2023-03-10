import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLandingPage } from './style'
import { Header } from '../../Components/Header'
import { FaGitAlt, FaBook } from 'react-icons/fa'
import { HiOutlineGlobe } from 'react-icons/hi'

export const LandingPage = () => {
  
  return (
    <StyledLandingPage>
      <Header/>
      <h1 className='logo'> CHAMPION TRACKER </h1>
        <div className='container__content'>

          <section>
            < FaBook size={70}/>
            <h1> Begginers guides! </h1>
            <span> (coming soon) </span>
            <p> If you are new to the game we support you! Come check our guides!</p>
          </section>

          <section>
            <HiOutlineGlobe size={70}/>
            <h1> Want to improve?</h1>
            <span> (coming soon) </span>
            <p> Here you'll get all the information you need to get to the top! </p>
           {/*  <p> Here you'll get all the statistics you need to get to the top!</p> */}
          </section>

          <section className='last-section'>
            <FaGitAlt size={70}/> 
            <h1>Open source </h1> <span> (coming soon) </span>
            <p> Let's build this together! </p>
          </section>

        </div>
    </StyledLandingPage>
  )
}
