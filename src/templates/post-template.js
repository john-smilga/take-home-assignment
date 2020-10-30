import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Loading from "../components/Loading"
import styled from "styled-components"
const ComponentName = ({ pathContext }) => {
  const [loading, setLoading] = useState([])
  const [post, setPost] = useState({})
  const getPost = async () => {
    const response = await fetch("https://graphqlzero.almansi.me/api", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `{
      post(id: ${pathContext.id}) {
        id
        title
      }
    }`,
      }),
    })
    const data = await response.json()
    // setPost(data.post.title)
    setPost(data.data.post)
    setLoading(false)
  }

  useEffect(() => {
    getPost()
  }, [])
  return (
    <Layout>
      <Wrapper>
        {loading ? (
          <Loading></Loading>
        ) : (
          <h1 className="post-title">{post.title}</h1>
        )}
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.main`
  .post-title {
    text-align: center;
    margin-top: 3rem;
  }
`
export default ComponentName
