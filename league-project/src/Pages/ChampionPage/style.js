import styled, { css } from 'styled-components'

export const StyledChampionPage = styled.div `
    display: flex;
    /* width: 100vw; */
    padding: 0.5rem;
    color: #fff;
    
    .container__main{
        display: flex;
        gap: 2rem;
        height: fit-content;

        margin-top: 10.5vh;
        justify-self: center;
        width: 100%;
    }
    
    .champion-name{
        font-size: 1.8rem;
        font-family: var(--font-family-bold);
    }
    strong{
        font-weight: 700;
    }
    .side-img{
        width: 20rem;
        max-height: 50rem;
        position: relative;
    }
    h1{
        font-weight: 700;
    }
    .container__content{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .switch-skin{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 35rem;
        
        position: absolute;
        top: 0;

    }
    .switch-skin button{
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        color: var(--color-grey-0);

        position: relative;
    }
    .switch-skin .btn-prev:hover{
        background-color: rgba(0,0,0,0.5);
        box-shadow: 10px 0px 10px 0px rgba(0,0,0,0.5);
    }
    .switch-skin .btn-next{
        position: absolute;
        right: 0;
        height: 100%;
    }
    .switch-skin .btn-next:hover{
        background-color: rgba(0,0,0,0.5);
        box-shadow: -10px 0px 10px 0px rgba(0,0,0,0.5);
    }

    @media (max-width:767px){
        .container__main{
            flex-direction: column;
        }
        .side-img-small-screen img{
            width: 99%;
            position: relative;
        }
        .side-img{
            display: none;
        }
    }
    @media (min-width: 768px){
        .side-img-small-screen{
            display: none;
            border: red;
        }
    }
`