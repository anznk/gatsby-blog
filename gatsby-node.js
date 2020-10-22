const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const thingsPost = path.resolve('./src/templates/things-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/all/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
        posts.forEach(post => {
          createPage({
            path: `/things/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
        posts.forEach(post => {
          createPage({
            path: `/food/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
