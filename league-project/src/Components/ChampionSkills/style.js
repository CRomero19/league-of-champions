import styled from "styled-components";

export const StyledSkills = styled.div`
  width: fit-content;
  display: flex;
  gap: 2rem;
  
  .img-passive {
    width: 45px;
    height: 45px;
  }
  .passive {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .skills {
    display: flex;
    gap: 0.8rem;
  }

  @media (max-width:430px){
    .skills {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
