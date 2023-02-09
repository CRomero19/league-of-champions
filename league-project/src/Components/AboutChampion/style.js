import styled from "styled-components";

export const StyledAboutChampion = styled.div`
    border-top: 1px solid var(--color-primary);
    padding-top:1rem;
    line-height: 180%;

    .stats{
        display: flex;
        gap: 2.5rem;
        margin-top: 2rem;
    }
    .stats div{
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .move-speed{
        position: absolute;
        bottom:0;
    }


`