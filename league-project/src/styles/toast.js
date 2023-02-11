import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledContainerToast = styled(ToastContainer)`
  .Toastify__toast {
    background-color: #343B41;
    color: var(--color-grey-0);
  }
  @media (max-width:800px){
    .Toastify__toast {
      width: 50vw;
      height: 19vh;
      background-color: #343B41;
      color: var(--color-grey-0);
    }
  }
`