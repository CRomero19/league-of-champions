import React, { useContext, useState } from "react";
import { Champions } from "../../Components/ChampionsList";
import { Header } from "../../Components/Header";
import { LoadingPage } from "../LoadingPage";
import { StyledChampionsPage } from "./style";
import { FaSearch } from "react-icons/fa";
import { ChampionContentContext } from "../../context/ChampionsInfo";

export const ChampionsPage = () => {
  const { champions } = useContext(ChampionContentContext);
  const [filter, setFilter] = useState("");
  const [championListStyle, setChampionListStyle] = useState(true);

  return (
    <>
      <Header />

      {champions.length > 0 ? (
        <StyledChampionsPage>
          <div className="container__search-champion">
            <button
              onClick={() => setChampionListStyle(!championListStyle)}
              className=""
            >
              {" "}
              change style of list{" "}
            </button>

            <div className="searchbar">
              <input
                type="text"
                placeholder="Champion name"
                onChange={(event) => {
                  setFilter(event.target.value);
                }}
              />
              <button type="submit">
                {" "}
                <FaSearch size={20} color="white" />{" "}
              </button>
            </div>

            <select
              name=""
              id=""
              onChange={(event) => {
                setFilter(event.target.value);
              }}
            >
              <option value="" hidden>
                {" "}
                Search for Role{" "}
              </option>
              <option value="">All roles</option>
              <option value="Assassin">Assassin</option>
              <option value="Fighter">Fighter</option>
              <option value="Mage">Mage</option>
              <option value="Marksman">Marksman</option>
              <option value="Support">Support</option>
              <option value="Tank">Tank</option>
            </select>
          </div>

          <Champions filter={filter} />
        </StyledChampionsPage>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};
