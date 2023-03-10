import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { eachChampion } from "../../services/api-allheroes";
import { StyledChampionPage } from "./style";
import { Header } from "../../Components/Header";
import { AboutChampion } from "../../Components/AboutChampion";
import { ChampionSkills } from "../../Components/ChampionSkills";
import { LoadingPage } from "../LoadingPage";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

export const ChampionPage = () => {
  const baseUrlImg = 'https://ddragon.leagueoflegends.com/cdn/img/champion'
  const [champion, setChampion] = useState(null);
  const [ championSkin, setChampionSkin] = useState(0)
  const { championId } = useParams();

  useEffect(() => {
    const currentChampion = async () => {
      try {
        const res = await eachChampion.get(`${championId}.json`);
        const champion = Object.keys(res.data.data).map(
          (key) => res.data.data[key]
        );
        setChampion(...champion);
      } catch (err) {
        alert(err);
      }
    };
    currentChampion();
  }, []);

  const previousChampionSkin = () =>{
    if(champion.skins.length > championSkin)
    setChampionSkin(championSkin-1)
  }

  const nextChampionSkin = () =>{
    if(champion.skins.length > championSkin)
    {
      setChampionSkin(championSkin+1)
    }
    
  }
  return (
    <>
    <Header />
      {champion ? (
        <StyledChampionPage>
          <div className="container__main">
            <div className="side-img">
              <img src={`${baseUrlImg}/loading/${champion.id}_${championSkin}.jpg`} alt={`${champion.id}img`}/>
              <div className="switch-skin">
                {championSkin > 0 && <button onClick={previousChampionSkin}className='btn-prev' > <FaChevronLeft/> </button>}
                {championSkin < champion.skins.length &&<button onClick={nextChampionSkin} className='btn-next'> <FaChevronRight/> </button>}
              </div>
            </div>

            <div className="side-img-small-screen">
              <img src={`${baseUrlImg}/splash/${championId}_${championSkin}.jpg`} alt=""/>
                <div className="switch-skin-mobile">
                  {championSkin > 0 && <button onClick={previousChampionSkin}className='btn-prev' > <FaChevronLeft/> </button>}
                  {championSkin < champion.skins.length &&<button onClick={nextChampionSkin} className='btn-next'> <FaChevronRight/> </button>}
                </div>
            </div>
            
           
            
            <main>
              <section className="container__content">
                
                  <h1 className="champion-name"> 
                    {" "}
                    {champion.name}, {champion.title}
                  </h1>
                  <p>
                    {" "}
                    {champion.tags[0]}{" "}
                    {champion.tags.length == 2 && `| ${champion.tags[1]}`} -{" "}
                    {champion.partype}
                  </p>
                

                <ChampionSkills champion={champion}/>

                <AboutChampion champion={champion}/>
              </section>
            </main>
          </div>
          
        </StyledChampionPage>
      ) : (
        <LoadingPage/>
      )}
    </>
  );
};

