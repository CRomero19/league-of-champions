import React from 'react'
import { Champions } from '../../Components/Champions-list'
import { Header } from '../../Components/Header'
import { LoadingPage } from '../LoadingPage'
import { StyledChampionsPage } from './style'

export const ChampionsPage = ({champions}) => {
  console.log(champions)
  return (
    <>
    <Header/>
    {
    champions.length > 0 ?
    (
    <StyledChampionsPage>
      
      <Champions champions={champions}/>
      </StyledChampionsPage>
    )
    :
      <LoadingPage/>
    }
    </>
  )
}


