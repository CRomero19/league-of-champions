import styled, { css } from 'styled-components'

export const StyledChampionPage = styled.div `
    display: flex;
    gap: 2rem;
    min-height: 87.2vh;
    padding: 0.5rem;
    padding-top: 7rem;
    color: #fff;
    background: linear-gradient(to top, rgb(19, 22, 63) 0%, rgb(83, 120, 149) 100%);

    strong{
        font-weight: 700;
    }
    img{
        width: 20rem;
    }
    h1{
        font-weight: 700;
    }
    .container__content{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`