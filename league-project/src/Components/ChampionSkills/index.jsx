import React from "react";
import { StyledSkills } from "./style";

export const ChampionSkills = ({ champion }) => {
  return (
    <StyledSkills>
      <div className="passive">
        <img src={`https://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/${champion.passive.image.full}`}alt={`${champion.passive.image.full}`} className="img-passive"/>
        <p> <strong> Passive: </strong> {champion.passive.name}{" "}</p>
        {/* <p> {champion.passive.description}</p> */}
      </div>

      <div className="skills">
        {
            champion.spells.map(spell => (
                 <img key={spell.id} src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/${spell.image.full}` } className="img-passive"/>
                ))
        }
      </div>
    </StyledSkills>
  );
};
