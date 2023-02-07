import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { eachChampion } from '../../services/api-allheroes'
import { StyledChampionPage } from './style'
import { Header } from '../../Components/Header'

export const ChampionPage = () => {
    const [champion, setChampion] = useState(null)
    const {championId} = useParams()

    useEffect(() => {
        const currentChampion = async () =>{
            try{
                const res = await eachChampion.get(`${championId}.json`)
                const champion = Object.keys(res.data.data).map((key) => res.data.data[key])
                console.log(...champion)
                setChampion(...champion)
            }catch(err){
                alert(err)
            }
        }
        currentChampion()
        },[])

    return(
        <>
        <Header/>
        {
          champion ?
          <StyledChampionPage>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt="" />  
      
            <main>
              <section className='container__content'>
                <h1> {champion.name}, {champion.title}</h1>
                <p>{champion.lore}</p>
              </section>
              <section className='container__skills'>
                <img src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${champion.passive.image.full}`} alt={`${champion.passive.image.full}`} className='img-passive'/>
                <div>
                  <p><strong> Passive: </strong> {champion.passive.name}</p>
                  <p> {champion.passive.description}</p>
                </div>
              </section>
            </main>  
          </StyledChampionPage>
          :
          <h1> Loading ... </h1>

        }
        </>     
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
