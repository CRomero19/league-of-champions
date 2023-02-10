import React from 'react'
import { StyledAboutChampion } from './style'
import { GiHealthPotion,GiSwordsEmblem, GiCrossedSwords, GiRunningShoe } from 'react-icons/gi'

export const AboutChampion = ({champion}) => {
  return (
    <StyledAboutChampion>
                <h1> How to play with:</h1>
                <p>{champion.allytips}</p>
                <h1> How to play against:</h1>
                <p>{champion.enemytips}</p>
                <h1> Lore: </h1>
                <p>{champion.lore}</p>

                
                <div className="stats">
                  <div>
                    <h3><GiHealthPotion/> Health and mana</h3>
                    <ul>
                      <li>Base health: {champion.stats.hp}</li>
                      <li>Health per level: {champion.stats.hpperlevel}</li>
                      <li>Hp regen: {champion.stats.hpregen}</li>
                      <li>Hp regen per level: {champion.stats.hpregenperlevel}</li>
                      <li>Base mana: {champion.stats.mp}</li>
                      <li>Mana per level: {champion.stats.mpperlevel}</li>
                      <li>Mp regen: {champion.stats.mpregen}</li>
                      <li>Mp regen per level: {champion.stats.mpregenperlevel}</li>
                    </ul>
                    
                  </div>
                  <div>
                    <h3> <GiCrossedSwords/> Attack </h3>
                    <ul>
                      <li>Attack range: {champion.stats.attackrange}</li>
                      <li>Base attack damage: {champion.stats.attackdamage}</li>
                      <li>Attack damage per level: {champion.stats.attackdamageperlevel}</li>
                      <li>Base attack speed: {champion.stats.attackspeed}</li>
                      <li>Attack speed per level: {champion.stats.attackspeedperlevel}</li>
                    </ul>
                  </div>
                  <div>
                    <h3> <GiSwordsEmblem/> Defense </h3>
                    <ul>
                      <li>Base armor: {champion.stats.armor}</li>
                      <li>Armor per level: {champion.stats.armorperlevel}</li>
                      <li>Base magic defense: {champion.stats.spellblock}</li>
                      <li>Magic defense per level: {champion.stats.spellblockperlevel}</li>
                    </ul>

                    
                      <p> <GiRunningShoe/> Move speed: {champion.stats.movespeed}</p>
                    

                  </div>
                 
                  

                </div>
    </StyledAboutChampion>
  )
}


