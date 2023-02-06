import React from 'react'
import { StyledCard } from './style'

export const Championcard = ({champion}) => {
  
  return (
    <StyledCard>
      <figure>
        <img src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion.id}.png`} alt="" />
        <figcaption>{
          champion.tags.length == 1 ?
          <p className='tags'>{champion.tags}</p>
          :
          <p className='tags'> <span> {champion.tags[0]} </span>| <span> {champion.tags[1]} </span></p>
        } </figcaption>
      
      </figure>
      
      <div className='card-content'>
        <p className='name'> <strong>{champion.name}</strong>, {champion.title} </p> 
        <p> {champion.blurb}</p>
        
      </div>
      
      
    </StyledCard>
  )
}

