import React from 'react'
import { Championcard } from '../Champion-card'
import { StyledListOfChampions } from './style'

export const Champions = ({champions}) => {
  return (
    <StyledListOfChampions>
      {
        champions.map(champion =>(
            <Championcard key={champion.id} champion={champion}/> ))
      }
    </StyledListOfChampions>
  )
}