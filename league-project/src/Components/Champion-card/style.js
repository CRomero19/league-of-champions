import styled, { css } from 'styled-components'

export const StyledCard = styled.li `
    box-shadow: 0 0 5px 0 black;
    width: 30rem;
    padding: 1rem;
    
    display: flex;
    gap: 0.5rem;
    
    position: relative;
    font-family: 'Roboto', sans-serif;
    background-color: var(--color-grey-20);

    img{
        width: 130px;
        height: 130px;
        
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
        text-align: center;
    }
    
`