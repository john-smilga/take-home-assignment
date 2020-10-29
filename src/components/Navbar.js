import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
export const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <h2>okta</h2>
        <div className="nav-links">
          <Link to="/sponsors">sponsors</Link>
          <Link to="/contact">contact</Link>
          <Link to="/posts">posts</Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background: var(--clr-blue-dark);
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--clr-white);
  }
  .nav-links {
    width: 250px;
    display: flex;
    justify-content: space-between;
    a {
      text-transform: capitalize;
      color: var(--clr-white);
      font-size: 1rem;
      letter-spacing: var(--spacing);
    }
  }
`

export default Navbar
