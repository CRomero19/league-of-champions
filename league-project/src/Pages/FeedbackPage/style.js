import styled ,{css} from "styled-components";

export const StyledFeedbackPage = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family-bold);
    
    ${props => props.satisfactionGrade < 5 && css`span{color:red}`}
    ${props => props.satisfactionGrade == 5 && css`span{color:var(--color-grey-100)}`}
    ${props => props.satisfactionGrade >= 6 && css`span{color:var(--color-succes-vibrant)}`}
    main{
        position: absolute;
        top: 11vh;

        width: 85vw;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-family: var(--font-family-bold);
    }

    h1{
        font-size: 2rem;
        color: var(--color-grey-0);
        text-align: center;
    }
    h2{
        text-align: center;
        color: var(--color-grey-0);
    }
    .grade{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        margin: 0 auto;
    }
    .selected-grade{
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 180px;
        border: none;
        padding: 0.3rem;
        transition: 500ms;
        
        background-color: var(--color-grey-20);
        text-align: center;
    }
    .selected-grade:hover{
        background-color: var(--color-grey-50);
        color: var(--color-grey-0);
    }
    
    .submit{
        width: fit-content;
        padding: 0.5rem;
        border-radius: 0;
        border: 1px solid var(--color-grey-20);
        background-color: var(--color-grey-100);
        color: var(--color-grey-0);
        line-height: 90%;
        transition:500ms;
    }
    .submit:hover{
        background-color: var(--color-grey-50);

    }
    form{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 30rem;
        align-self: center;
        max-width: 80%;

    }
    form label{
        color: var(--color-grey-0);
    }
    form input,select,textarea{
        background-color: var(--color-grey-100);
        border: 1px solid var(--color-grey-50);
        padding: 0.3rem;
        color: var(--color-grey-0);
        text-indent:0.3rem;
    }
    form input::placeholder{
    color: var(--color-grey-0);
    opacity: 0.75;  
    }
    form textarea::placeholder { 
    color: var(--color-grey-0);
    opacity: 0.75;
}
    @media (max-width:1023px){
        height: 130vh;
            
    h1{
        line-height:150%;
    }
    }
`

