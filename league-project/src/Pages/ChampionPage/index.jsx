import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { eachChampion } from '../../services/api-allheroes'
import { StyledChampionPage } from './style'


export const ChampionPage = () => {
    const [champion, setChampion] = useState([])
    const {championId} = useParams()

    useEffect(() => {
        const currentChampion = async () =>{
            try{
                const res = await eachChampion.get(`${championId}.json`)
                const result = Object.keys(res.data.data).map((key) => res.data.data[key])
                setChampion(result)
            }catch(err){
                alert(err)
            }
        }
        currentChampion()
        },[])
       
      /*  const currentChampion = champion[0]
       console.log(currentChampion.lore) */
    return(
        <StyledChampionPage>
         {/*  <h1>{champion[0].name}</h1>
          <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion[0].id}_0.jpg`} alt="" /> */}
             
            <div className='teste'>
              <h1>teste</h1>
            </div>
        </StyledChampionPage>
        
    )
}

/* 
export const ChampionPage = () => {
    const championId = useParams()
    const [champion, setChampion] = useState({})

    useEffect(()=>{
        const loadChampion = async () =>{
        try{
          const response = await eachChampion.get(`${championId.id}.json`)
          let result = Object.keys(response.data.data).map((key) => response.data.data[key])
          console.log(result)
          setChampion(response) 
        }
        catch(error){
          Toastify.error('Falha na conexão!')
        }
      }
      loadChampion()
    },[])

   console.log(champion.data.data)


  return (
    <StyledChampionPage>
     
    </StyledChampionPage>
  )
}
 */
