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
                    <h3> <GiCrossedSwords/> Attack </h3>
                    <p>Attack range: {champion.stats.attackrange}</p>
                    <p>Base attack damage: {champion.stats.attackdamage}</p>
                    <p>Attack damage per level: {champion.stats.attackdamageperlevel}</p>
                    <p>Base attack speed: {champion.stats.attackspeed}</p>
                    <p>Attack speed per level: {champion.stats.attackspeedperlevel}</p>
                  </div>
                  <div>
                    <h3> <GiSwordsEmblem/> Defense </h3>
                    <p>Base armor: {champion.stats.armor}</p>
                    <p>Armor per level: {champion.stats.armorperlevel}</p>
                    <p>Base magic defense: {champion.stats.spellblock}</p>
                    <p>Magic defense per level: {champion.stats.spellblockperlevel}</p>

                    <p className='move-speed'>
                      <span> <GiRunningShoe/> Move speed: {champion.stats.movespeed}</span>
                    </p>

                  </div>
                 
                  

                </div>
    </StyledAboutChampion>
  )
}


