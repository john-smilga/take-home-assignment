import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Companies from "../components/Sponsors"
const Sponsors = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="container">
          <h1 className="title">sponsors</h1>
          <div className="content">
            <p>
              Oktane20 is fueled by support of our sponsors. Generate business
              with a forward-thinking group of IT professionals, and increase
              exposure for your solutions and services. Make sure you are a part
              of more strategic IT discussions that center on building new and
              differentiated experiences in an increasingly mobile and
              cloud-centric world.
            </p>
            <p>
              Contact us at sponsorships@okta.com if you are interested in
              sponsoring.
            </p>
            <a href="https://www.okta.com/">view sponsorship prospectus</a>
            <Companies />
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  background: var(--clr-blue-light);
  .container {
    width: 90vw;
    max-width: var(--max-width);
    padding: 5rem 0;
    margin: 0 auto;
    color: var(--clr-white);
  }
  .title {
    border-top: 4px solid #fff;
    display: inline-block;
    padding-top: 12px;
    margin-bottom: 6rem;
  }
  .content {
    p {
      font-size: 1rem;
      line-height: 1.45;
    }
    a {
      color: var(--clr-yellow);
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 0.05rem;
      border-bottom: 1px solid var(--clr-yellow);
    }
    @media (min-width: 576px) {
      text-align: center;
      width: 90%;
      margin: 0 auto;
    }
  }
`

export default Sponsors
