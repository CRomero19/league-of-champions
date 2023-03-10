import React from 'react'
import { Link } from 'react-router-dom'
import { StyledLinkCard } from '../../styles/LinkCard'
import { StyledCard } from './style'

export const Championcard = ({champion}) => {
  
  return (
    <StyledCard championId = {champion.id}>
      <figure>
       <div className='img'></div>
        <figcaption>{
          /* IMPLEMENT DIFERENTE COLLORS OR ICONS FOR EACH CLASS */
          champion.tags.length == 1 ?
          <p className='tags'>{champion.tags}</p>
          :
          <p className='tags'> <span> {champion.tags[0]} </span>| <span> {champion.tags[1]} </span></p>
        } </figcaption>
      
      </figure>
      
      <div className='card-content'>
        <h2 className='name'> <strong>{champion.name}</strong>, {champion.title} </h2> 
        <p> {champion.blurb}</p>
        <StyledLinkCard to={`champion/${champion.id}`}> Learn more... </StyledLinkCard> 
      </div>
      
      
    </StyledCard>
  )
}

