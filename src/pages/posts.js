import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Loading from "../components/Loading"
import { Link } from "gatsby"
const Posts = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    const response = await fetch("https://graphqlzero.almansi.me/api", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        query: `query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
    }
    meta {
      totalCount
    }
  }
}`,
        variables: {
          options: {
            paginate: {
              page: 1,
              limit: 5,
            },
          },
        },
      }),
    })
    const {
      data: {
        posts: { data },
      },
    } = await response.json()
    setPosts(data)
    setLoading(false)
  }

  useEffect(() => {
    getPosts()
  }, [])
  console.log(posts)
  return (
    <Wrapper>
      <Layout>
        <h1>Posts </h1>

        {loading ? (
          <Loading />
        ) : (
          <div className="posts-center">
            {posts.map(post => {
              const { id, title } = post
              return (
                <Link key={id} to={`/posts/${id}`} className="post">
                  <h4>{title}</h4>
                </Link>
              )
            })}
          </div>
        )}
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  h1 {
    text-align: center;
    margin-top: 5rem;
  }
  .posts-center {
    width: 90vw;
    margin: 3rem auto;
    max-width: 700px;
  }
  .post {
    background: var(--clr-white);
    display: block;
    border-radius: var(--radius);
    text-align: center;
    padding: 1rem 2rem;
    margin: 1rem 0;
    color: var(--clr-blue-dark);
  }
`
export default Posts
