import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const StyledContainerToast = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    background-color: #343B41;
    color: var(--color-grey-0);
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;