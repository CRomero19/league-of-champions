import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledLinkBurger = styled(Link)`
    width: 100%;
    padding: 0.3rem 0.8rem;
    text-decoration: none;
    color: aliceblue;
    border-bottom: 3px solid transparent;
    font-family: var(--font-family-bold);
    padding: 1rem;
    &:hover,
    &:focus {
        background-color: var(--color-grey-hover);
        border-bottom: 3px solid var(--color-primary-50);
        color: var(--color-secondary);
    }

`