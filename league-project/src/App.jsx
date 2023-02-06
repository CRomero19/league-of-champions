import { useEffect, useState } from 'react'
import { allChampions } from './services/api-allheroes'
import { Routes, Route , Link} from 'react-router-dom';
import './styles/index.css'
import { ChampionsPage } from './Pages/ChampionsPage';
import { LandingPage } from './Pages/LandingPage';
import { NotFound } from './Pages/NotFound';


function App() {
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
      <Route path='*' element={ <NotFound/>} />
    </Routes>
  )
}

export default App
