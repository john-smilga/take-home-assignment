import React from "react"
import styled from "styled-components"
const Loading = () => {
  return <Wrapper></Wrapper>
}
const Wrapper = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: var(--clr-blue-dark);
  animation: spinner 0.6s linear infinite;
`
export default Loading
