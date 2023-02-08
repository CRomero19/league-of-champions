import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledLinkCard = styled(Link)`
    background-color: #016882;
    width: fit-content;
    padding: 0.3rem 0.8rem;
    text-decoration: none;
    color: aliceblue;

    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-family: var(--font-family-bold);
    border-bottom: 3px solid transparent;

    &:hover,
    &:focus {
        background-color: var(--color-grey-hover);
        /* border-radius: 8px; */
        border-bottom: 3px solid var(--color-primary-50);
        color: var(--color-secondary);
    }

`
