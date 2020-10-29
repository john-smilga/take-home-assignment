import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <h1>home assignment</h1>
    </Wrapper>
  </Layout>
)
const Wrapper = styled.div`
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
`
export default IndexPage
