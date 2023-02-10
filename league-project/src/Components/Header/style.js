import styled, { css } from 'styled-components'

export const StyledHeader = styled.header `
    
    background-color: rgb(0,0,0,0.8);
    height: 10vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    position: fixed;
    top: 0;
    z-index: 1;
    
    img{
        width: 50px;
    }
    nav{
        display: flex;
    }
    button{
        background: none;
        border:none;
        color: aliceblue;
        border-bottom: 3px solid transparent;
        font-family: var(--font-family-bold);

        display: flex;
        gap: 0.5rem;
        align-items: center;
        padding: 0.3rem 1rem;
    }

    button:hover{
        background-color: var(--color-grey-hover);
        border-bottom: 3px solid var(--color-primary-50);
        color: var(--color-secondary);
    }
    
    @media (max-width:1023px){
        nav{
            display: none;
        }
    }
    @media (min-width:1024px){
        
        
    }

`