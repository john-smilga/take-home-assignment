/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const fetch = require("node-fetch")
// create pages dynamically
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
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
  data.forEach(post => {
    createPage({
      path: `/posts/${post.id}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        id: post.id,
      },
    })
  })
}
