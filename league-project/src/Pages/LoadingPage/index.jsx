import React from 'react'
import { StyledLoadingPage } from './style'
import { GuardSpinner } from "react-spinners-kit"

export const LoadingPage = () => {
  return (
    <StyledLoadingPage>
      <GuardSpinner size={60} />
    </StyledLoadingPage>
  )
}

