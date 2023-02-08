import React from 'react'
import { Champions } from '../../Components/Champions-list'
import { Header } from '../../Components/Header'
import { StyledChampionsPage } from './style'

export const ChampionsPage = ({champions}) => {
  return (
    <StyledChampionsPage>
      <Header/>
      <Champions champions={champions}/>
    </StyledChampionsPage>
  )
}


