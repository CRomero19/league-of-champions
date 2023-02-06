import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { eachChampion } from '../../services/api-allheroes'
import { StyledChampionPage } from './style'


export const ChampionPage = () => {
    const [champion, setChampion] = useState([])
    const championId = useParams()

    useEffect(() => {
        const currentChampion = async () =>{
            try{
                const res = await eachChampion.get(`${championId.id}.json`)
                const result = Object.keys(res.data.data).map((key) => res.data.data[key])
                setChampion(result)
            }catch(err){
                alert(err)
            }
        }
        currentChampion()
        },[])

            console.log(champion[0].name)
    return(
        <StyledChampionPage>
            <h1>{champion[0].name}</h1>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion/${champion[0].id}.json`} alt="" />
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
