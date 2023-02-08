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
        gap: 1rem;
    }
    

`