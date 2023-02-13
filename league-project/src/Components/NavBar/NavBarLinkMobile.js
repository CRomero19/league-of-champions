import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavBarMobile = styled(Link)`
    
    padding: 0.3rem 0.8rem;
    text-decoration: none;
    color: aliceblue;
    border-bottom: 3px solid transparent;
    font-family: var(--font-family-bold);

    &:hover,
    &:focus {
        background-color: var(--color-grey-hover);
        /* border-radius: 8px; */
        border-bottom: 3px solid var(--color-primary-50);
        color: var(--color-secondary);
    }

`