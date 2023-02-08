import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { eachChampion } from "../../services/api-allheroes";
import { StyledChampionPage } from "./style";
import { Header } from "../../Components/Header";

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
        console.log(...champion);
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
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
            alt=""
          />

          <main>
            <section className="container__content">
              <h1>
                {" "}
                {champion.name}, {champion.title}
              </h1>
              <p>
                {" "}
                {champion.tags[0]}{" "}
                {champion.tags.length == 2 && `| ${champion.tags[1]}`} -{" "}
                {champion.partype}
              </p>

              <div className="container__skills">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${champion.passive.image.full}`}
                  alt={`${champion.passive.image.full}`}
                  className="img-passive"
                />
                <div>
                  <p>
                    <strong> Passive: </strong> {champion.passive.name}{" "}
                  </p>
                  {/* <p> {champion.passive.description}</p> */}
                </div>
                <div>
                  <h1> SKILLS</h1>
                </div>
              </div>
              <div className="about">
                <h1> ABOUT {champion.name} :</h1>
                <h1> How to play with:</h1>
                <p>{champion.allytips}</p>
                <h1> How to play against:</h1>
                <p>{champion.enemytips}</p>
                <h1> Lore: </h1>
                <p>{champion.lore}</p>

                <h1>Stats:</h1>
                <div className="stats">
                  <div>
                    <h3> Health and mana: </h3>
                    <p>Base health: {champion.stats.hp}</p>
                    <p>Health per level: {champion.stats.hpperlevel}</p>
                    <p>Hp regen: {champion.stats.hpregen}</p>
                    <p>Hp regen per level: {champion.stats.hpregenperlevel}</p>
                    <p>Base mana: {champion.stats.mp}</p>
                    <p>Mana per level: {champion.stats.mpperlevel}</p>
                    <p>Mp regen: {champion.stats.mpregen}</p>
                    <p>Mp regen per level: {champion.stats.mpregenperlevel}</p>
                  </div>
                  <div>
                    <h3> Attack :</h3>
                    <p>Attack range: {champion.stats.attackrange}</p>
                    <p>Base attack damage: {champion.stats.attackdamage}</p>
                    <p>Attack damage per level: {champion.stats.attackdamageperlevel}</p>
                    <p>Base attack speed: {champion.stats.attackspeed}</p>
                    <p>Attack speed per level: {champion.stats.attackspeedperlevel}</p>
                    <p>Critical chance: {champion.stats.crit}</p>
                    <p>Critical chance per level: {champion.stats.critperlevel}</p>
                  </div>
                  <div>
                    <h3> Defense :</h3>
                    <p>Base armor: {champion.stats.armor}</p>
                    <p>Armor per level: {champion.stats.armorperlevel}</p>
                    <p>Base magic defense: {champion.stats.spellblock}</p>
                    <p>Magic defense per level: {champion.stats.spellblockperlevel}</p>
                  </div>
                  <p>Move speed: {champion.stats.movespeed}</p>

                </div>
              </div>
            </section>
          </main>
        </StyledChampionPage>
      ) : (
        <h1> Loading ... </h1>
      )}
    </>
  );
};

