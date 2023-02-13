import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { ChampionsPage } from '../Pages/ChampionsPage';
import { LandingPage } from '../Pages/LandingPage';
import { NotFound } from '../Pages/NotFound';
import { ChampionPage } from '../Pages/ChampionPage';
import { AboutLeaguePage } from '../Pages/AboutLeagueOfLegends';
import { GuidesPage } from '../Pages/GuidesPage';
import { FeedbackPage } from '../Pages/FeedbackPage'
import { ProfilePage } from '../Pages/ProfilePage'
import { AnimatePresence } from 'framer-motion'

export const AppRoutes = () => {

  return (
    <AnimatePresence>
      <Routes>
        <Route path='' element={ <LandingPage/>} />
        <Route path='/champions-page' element={ <ChampionsPage/> }/>
        <Route path='/champions-page/champion/:championId' element={ <ChampionPage/>} />
        <Route path='/about' element={ <AboutLeaguePage/>} />
        <Route path='/guides' element={ <GuidesPage/>} />  {/* AQUI POSSO USAR O OUTLINE PARA COLOCAR OUTROS GUIAS DENTRO DESSE GUIA S3 demo de rotas do tsu!! QUARTA EU ACHO!! */}
        <Route path='/feedback' element={ <FeedbackPage/>} />
        <Route path='/profile' element={ <ProfilePage/>} />  {/* COLOCAR UM /: futuramente pra buscar por param ID do cara. */}
        <Route path='*' element={ <NotFound/>} />
      </Routes>
    </AnimatePresence>
  )
}

