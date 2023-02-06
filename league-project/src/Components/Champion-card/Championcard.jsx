import React from 'react'
import { StyledCard } from './style'

export const Championcard = ({champion}) => {
  return (
    <StyledCard>
      <img src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion.id}.png`} alt="" />
      <div className='card-content'>
        <p className='name'> <strong>{champion.name}</strong>, {champion.title} </p> 
        <p> {champion.blurb}</p>
        <p className='tags'> {champion.tags} </p>
      </div>
      
      
    </StyledCard>
  )
}

