import React from 'react'
import { Championcard } from '../Champion-card'
import { StyledListOfChampions } from './style'

export const Champions = ({champions, filter}) => {
  
  const filteredChampions = champions.filter(champion =>
    champion.name.toLowerCase().includes(filter.toLowerCase()) 
    || champion.tags[0].toLowerCase().includes(filter.toLowerCase())
    /* || champion.tag[2]?.toLowerCase().includes(filter.toLowerCase()) */)
  

 /*  const filteredChampions = champions.filter(champion =>{
    champion.tags.length == 1 ?
    champion.name.toLowerCase().includes(filter.toLowerCase()) 
    || champion.tags[0].toLowerCase().includes(filter.toLowerCase())
    :
    champion.name.toLowerCase().includes(filter.toLowerCase()) 
    || champion.tags[0].toLowerCase().includes(filter.toLowerCase())
    || champion.tags[1].toLowerCase().includes(filter.toLowerCase())
  })
     */
    
    

  return (
    <StyledListOfChampions>
      {
        filteredChampions.map(champion =>(
            <Championcard key={champion.id} champion={champion}/> ))
      }
    </StyledListOfChampions>
  )
}