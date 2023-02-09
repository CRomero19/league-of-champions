import React from 'react'
import { StyledLoadingPage } from './style'
import { ClapSpinner } from "react-spinners-kit"

export const LoadingPage = () => {
  return (
    <StyledLoadingPage>
      <ClapSpinner size={60} color="#7210d4" />
    </StyledLoadingPage>
  )
}

