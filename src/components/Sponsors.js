import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { useGlobalContext } from "../context"
const query = graphql`
  {
    allContentfulSponsors(sort: { fields: createdAt, order: ASC }) {
      nodes {
        id
        url
        desc {
          desc
        }
        image {
          fixed(width: 150) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`

const Sponsors = () => {
  const {
    allContentfulSponsors: { nodes: sponsors },
  } = useStaticQuery(query)
  const { openModal } = useGlobalContext()
  return (
    <Wrapper>
      <h2 className="section-title">platinum sponsors</h2>
      <div className="section-center">
        {sponsors.map(sponsor => {
          const {
            id,
            url,
            desc: { desc },
            image: { fixed },
          } = sponsor
          return (
            <button
              className="sponsor"
              key={id}
              onClick={() => openModal(fixed, desc, url)}
            >
              <Image fixed={fixed} />
            </button>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 6rem;
  .section-title {
    text-align: center;
    color: var(--clr-yellow);
    position: relative;
    z-index: 2;
  }
  .section-title::before {
    content: "";
    height: 60px;
    width: 60px;
    position: absolute;
    background: #95446b;
    border-radius: 50%;
    opacity: 0.7;
    transform: translate3d(-61%, -50%, 0);
    z-index: -1;
  }
  .section-center {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 2rem;
  }
  .sponsor {
    background: var(--clr-blue-dark);
    border-color: transparent;
    cursor: pointer;
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    margin: 0.5rem;
  }
`

export default Sponsors
