import React from 'react'
import { Champions } from '../../Components/Champions-list'
import { Header } from '../../Components/Header'

export const ChampionsPage = ({champions}) => {
  return (
    <div>
      <Header/>
      <Champions champions={champions}/>
    </div>
  )
}


