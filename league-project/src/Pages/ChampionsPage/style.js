import styled from "styled-components"

export const StyledChampionsPage = styled.div`
    min-height: 88vh;
    background: linear-gradient(109.6deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 91.1%);
    padding-top: 12vh;

    .container__search-champion{
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        max-width: 100vw;
    }
    .searchbar{
        display: flex;
        gap: 0;
    }
    .container__search-champion input{
        margin: 1rem;
        border: none;
        background-color: var(--color-grey-100);
        padding: 0.5rem;
        text-indent: 0.5rem;
        color: var(--color-grey-0);
    }
    .searchbar button{
        border: none;
        background-color: transparent;
        position: relative;
        right: 3.1rem;
    }
    
    .container__search-champion select{
        margin: 1rem;
        border: none;
        background-color: var(--color-grey-100);
        padding: 0.5rem;
        color: var(--color-grey-0);
    }

    @media (max-width:767px) {
        justify-content: center;
        .container__search-champion select{
            display: none;
        }
    }
    
`