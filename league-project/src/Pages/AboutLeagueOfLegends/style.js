import styled from "styled-components";

export const StyledAboutPage = styled.div`
    display: flex;
    gap: 2rem;
    min-height: 90vh;
    padding-top: 10vh;
    color: #fff;
    background: linear-gradient(to top, rgb(19, 22, 63) 0%, rgb(83, 120, 149) 100%);
    
    span{
        color: var(--color-primary-50);
    }
    section{
        width: 85%;
        padding: 1rem;
        margin: 0 auto;
        line-height: 180%;
    }
    section ul li{
        list-style: circle;
        list-style-position: inside;
        
    }
    section h1{
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        font-family: var(--font-family-bold);
    }
    section h2{
        font-family: var(--font-family-bold);
        font-size: 1.5rem;
        font-weight: 500;
        margin: 0.5rem 0rem;
       
    }
`