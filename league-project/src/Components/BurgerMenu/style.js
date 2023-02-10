import styled from "styled-components";

export const StyledBurgerMenu = styled.div`
  .menu-burger {
    height: 7vh;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    cursor: pointer;
  }
  .bar {
    width: 3rem;
    height: 0.3rem;
    background-color: var(--color-grey-0);
    border-radius: 0.5rem;
  }
  .menu {
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    position: absolute;
    right: 0.05rem;
    background-color: rgb(0, 0, 0, 0.8);
    top: 10vh;
  }
  .hidden {
    display: none;
  }
  .visible {
    display: flex;
  }
  button {
    padding: 1rem;
  }
  button:hover {
    background-color: var(--color-grey-hover);
    border-bottom: 3px solid var(--color-primary-50);
    color: var(--color-secondary);
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
