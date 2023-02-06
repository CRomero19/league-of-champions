import styled, { css } from 'styled-components'

export const StyledCard = styled.li `
    border: 1px solid black;
    width: 30rem;
    padding: 1rem;
    
    display: flex;
    gap: 0.5rem;
    
    position: relative;
    font-family: 'Roboto', sans-serif;
    background-color: antiquewhite;

    img{
        width: 120px;
        height: 120px;
        
    }
    strong{
        font-weight: bold;
    }
    .name{
        font-size: 1.4rem;
    }
    .card-content{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .tags{
        font-size: 0.8rem;
        background-color: #026685;
        color: #fff;
        position: absolute;
        left: 1rem;
        bottom: 0.3rem;
        padding: 0.2rem;
    }
`