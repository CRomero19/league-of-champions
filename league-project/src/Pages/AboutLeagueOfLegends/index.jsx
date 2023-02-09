import React from "react";
import { StyledAboutPage } from "./style";
import { Header } from "../../Components/Header";

export const AboutLeaguePage = () => {
  return (
    <StyledAboutPage>
      <Header />
      <main>
        <section>
          <h1> What is League of Legends?</h1>
          <p>
            League of Legends (LOL) is a Multiplayer Online Battle Arena (MOBA)
            game that was released by Riot Games in 2009. In a MOBA, each of the
            players control a character with unique abilities and work together
            to destroy the enemy base while protecting their own. An example of
            another popular MOBA game is Defense of the Ancients (DOTA).
          </p>
          <p>
            League of Legends features several game modes, each offering a
            unique gameplay experience for players. Some of the most popular
            game modes include:
            <ul>
              <li>
                Ranked: In Ranked mode, players compete in matches with other
                players of similar skill levels. The outcome of each match
                determines a player's rank, which can range from Bronze to
                Challenger. The goal of Ranked mode is to improve your rank and
                become the best player you can be.{" "}
              </li>
              <li>
                Normal: Normal mode is the standard game mode in League of
                Legends. Players compete in casual matches against other
                players, with the outcome having no impact on their rank or
                overall performance. This mode is perfect for players who want
                to play for fun and practice new strategies.{" "}
              </li>
              <li>
                ARAM (All Random All Mid): ARAM is a 5v5 game mode that takes
                place on a single lane. In this mode, players randomly select a
                champion and must work together to defeat the enemy team. ARAM
                is a fast-paced and action-packed game mode that is great for
                players who want a quick, intense game.{" "}
              </li>
              <li>
                URF (Ultra Rapid Fire): URF is a limited-time game mode that is
                available periodically. In this mode, players choose a champion
                and battle it out in fast-paced games. URF is known for its
                high-speed gameplay and over-the-top action.{" "}
              </li>
              <li>
                TFT (Teamfight Tactics): TFT is a strategy game mode where
                players draft, deploy, and upgrade champions to create powerful
                teams. Players compete in rounds to earn rewards and climb the
                leaderboard. TFT is a unique and exciting game mode that
                challenges players to think critically and make strategic
                decisions.{" "}
              </li>
              <li></li>
            </ul>
            <p>
              These are just a few of the many game modes available in League of
              Legends. Each mode offers a unique and exciting gameplay
              experience, so players are sure to find one that they love.
              Whether you're looking for a challenging ranked match, a casual
              game, or a fast-paced battle, League of Legends has a game mode
              for you.
            </p>
          </p>
          Known for its intense gameplay, team strategy, and captivating
          characters. Furthermore, the game is constantly updated with new
          content, such as characters, skins, events, and game modes, which
          means that there is always something new and exciting for players to
          experience. Gameplay is another aspect that makes League of Legends so
          appealing. With an easy-to-learn but difficult-to-master gameplay
          system, there is always something new for players to learn and improve
          upon. Furthermore, with various game modes, there is always a new way
          to experience and play the game. Ultimately, League of Legends is an
          incredibly fun and engaging game that offers players a wide range of
          gaming options. If you are looking for an exciting team strategy game
          with a vibrant community and intense gameplay, then League of Legends
          is definitely the game for you. So, what are you waiting for? Come and
          join the fun now!{" "}
        </section>
      </main>
    </StyledAboutPage>
  );
};
