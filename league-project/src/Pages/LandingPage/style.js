import styled, { css } from 'styled-components'
import teste from '../../assets/bcg-black.jpg'

export const StyledLandingPage = styled.div `
    
    height: 100vh;
    width: 100vw;
    background-color: aliceblue;

    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    
    background: url(${teste}) no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;

    button{
        background-color: var(--color-primary);
        color: var(--color-secondary);
        border: none;
        font-weight: bold;
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
    }
    .main-content{
        color: aliceblue;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 1rem;
        width: 20rem;
        max-width: 90%;
        margin-top: 20rem;
        
    }
    .main-content button{
        margin: 0 auto;
    }

`