import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { eachChampion } from "../../services/api-allheroes";
import { StyledChampionPage } from "./style";
import { Header } from "../../Components/Header";
import { AboutChampion } from "../../Components/AboutChampion";
import { ChampionSkills } from "../../Components/ChampionSkills";
import { LoadingPage } from "../LoadingPage";

export const ChampionPage = () => {
  const [champion, setChampion] = useState(null);
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

  return (
    <>
    <Header />
      {champion ? (
        <StyledChampionPage>
          <div className="container__main">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
              alt=""
              className="side-img"
            />
            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`} alt="" className="side-img-small-screen"/>

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

