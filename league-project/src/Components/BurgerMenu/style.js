import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  .menu-burger {
    height: 8.5vh;
    width: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    cursor: pointer;
  }
  .bar {
    width: 4rem;
    height: 0.4rem;
    background-color: var(--color-grey-0);
    border-radius: 0.5rem;
  }
  .menu{
    width: 30vw;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    position: absolute;
    right: 0rem;
    background-color: rgb(0,0,0,0.8);
    top: 10vh;
  }
  .hidden{
    display: none;
  }
  .visible{
    display: flex;
  }
  @media (min-width:1024px){
    display: none;
  }
`;
