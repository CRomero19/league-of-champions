import styled, { css } from 'styled-components'

export const StyledChampionPage = styled.div `
    display: flex;

    min-height: 98.3vh;
    /* width: 100vw; */
    padding: 0.5rem;
    color: #fff;
    
    
    .container__main{
        display: flex;
        gap: 2rem;
        height: fit-content;

        margin-top: 10.5vh;
        justify-self: center;
        width: 100%;
    }
    
    .champion-name{
        font-size: 1.8rem;
        font-family: var(--font-family-bold);
    }
    strong{
        font-weight: 700;
    }
    .side-img{
        width: 20rem;
        max-height: 50rem;
    }
    h1{
        font-weight: 700;
    }
    .container__content{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width:767px){
        .container__main{
            flex-direction: column;
        }
        .side-img-small-screen{
            max-width: 99%;
        }
        .side-img{
            display: none;
        }
    }
    @media (min-width: 768px){
        .side-img-small-screen{
            display: none;
            border: red;
        }
    }
`