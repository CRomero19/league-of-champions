import styled, { css } from 'styled-components'
import bcg from '../../assets/landing2.jpg'

export const StyledLandingPage = styled.div `
    
    height: 100vh;
    width: 100vw;
    background-color: aliceblue;

    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    
    background: url(${bcg}) no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    .logo{
        font-family: var(--font-family-bold);
        color: var(--color-grey-0);
        font-size: 4rem;
        opacity: 0.95;
        text-shadow: 0 0 1em #e0e0e0, 0 0 0.2em #e0e0e0;

        position: relative;
        bottom: 3rem;
    }
    .container__content{
        width: 100vw;
        height: 45vh;
        background-color: var(--color-primary-dark);

        position: absolute;
        bottom: 0;
        left: 0;

        box-shadow: 10px 0px 40px 5px var(--color-primary);

        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }
    
    section{
        width: 30%;
        height: 90%;
        font-family: var(--font-family-bold);
        color: var(--color-grey-0);
        text-align: center;
        line-height: 200%;
    }
    section h1{
        font-size: 2rem;
        margin: 2rem 0rem;
    }

`