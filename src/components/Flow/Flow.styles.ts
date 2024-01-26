import styled, { keyframes } from 'styled-components'

const slidein = keyframes`
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
`

export const Container = styled.div`
  width: 80vw;
  height: 90vh;
  // animation: ${slidein} 1s ease-in-out;
`
