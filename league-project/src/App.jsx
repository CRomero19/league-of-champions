import { useEffect, useState } from 'react'
import { Champions } from './Components/Champions-list/Champions'
import { Header } from './Components/Header/Header'
import { allChampions } from './services/api-allheroes'
import './styles/index.css'

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
    <div>
        <Header/>
        <Champions champions={champions}/>
    </div>
  )
}

export default App
