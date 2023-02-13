import styled, { css } from 'styled-components'

export const StyledCard = styled.li `
    box-shadow: 0 0 5px 0 black;
    width: 30rem;
    padding: 1rem;
    
    display: flex;
    gap: 0.5rem;
    font-family: var(--font-family-medium);
    position: relative;
    background-color: var(--color-grey-50);

    h2{
        font-family: var(--font-family-bold);
    }
    strong{
        font-weight: bold;
    }
    .name{
        font-size: 1.5rem;
    }
    .card-content{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .tags{
        font-size: 0.9rem;
        background-color: #026685;
        color: #fff;
        font-family: var(--font-family-bold);
        text-align: center;
    }

    @media (max-width: 768px)
        {
            flex-direction: column;
            min-height: 32.5rem;
        }
        .img{
            width: 100%;
            height: 14.375rem;  
            background:url(${props=> `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.championId}_0.jpg`});
            background-position: center;
            background-size: cover;
        }
        
    @media (min-width: 769px)
        {
            .img{
                width: 150px;
                height: 17rem;
                background:url(${props=> `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.championId}_0.jpg`});
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
        }
    
`