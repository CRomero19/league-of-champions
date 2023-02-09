import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChampionsPage } from '../Pages/ChampionsPage';
import { LandingPage } from '../Pages/LandingPage';
import { NotFound } from '../Pages/NotFound';
import { useEffect, useState } from 'react'
import { allChampions } from '../services/api-allheroes'
import { ChampionPage } from '../Pages/ChampionPage';
import { AboutLeaguePage } from '../Pages/AboutLeagueOfLegends';

export const AppRoutes = () => {
const [champions, setChampions] = useState([])
  useEffect(()=>{
    const loadChampions = async () =>{
      try{
        const response = await allChampions.get("");  
        let result = Object.keys(response.data.data).map((key) => response.data.data[key]);
        setChampions(result) 
      }
      catch(error){
        alert('Falha na conexão!')
      }
    }
    loadChampions()
  },[])
  return (
    <Routes>
      <Route path='' element={ <LandingPage/>} />
      <Route path='/champions-page' element={ <ChampionsPage champions={champions}/> }/>
      <Route path='/champions-page/champion/:championId' element={ <ChampionPage/>} />
      <Route path='/about' element={ <AboutLeaguePage/>} />
      <Route path='*' element={ <NotFound/>} />
    </Routes>
  )
}

