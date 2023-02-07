import styled, { css } from 'styled-components'

export const StyledChampionPage = styled.div `
    border: 1px solid black;
    font-family: 'Roboto';

    display: flex;
    strong{
        font-weight: 700;
    }
    img{
        width: 10rem;
    }
    h1{
        font-weight: 700;
    }
    .img-passive{
        width: 45px;
        height: 45px;
    }
    .container__skills{
        background-color: red;
        display: flex;
        align-items: center;
    }
`