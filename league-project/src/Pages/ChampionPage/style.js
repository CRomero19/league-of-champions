import styled, { css } from 'styled-components'

export const StyledChampionPage = styled.div `
    display: flex;
    gap: 1rem;
    height: 87.2vh;
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
    main{
        
    }
    .img-passive{
        width: 45px;
        height: 45px;
    }
    .container__skills{
        width: fit-content;
        background-color: blue;
        display: flex;
        align-items: center;
    }
    .stats{
        display: flex;
        gap: 0.5rem;
    }
    .stats div{
        border: 1px solid red;
    }
`