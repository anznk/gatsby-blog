import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from '../styles/things.module.scss'
import Layout from '../components/layout'
import ThingsPreview from '../components/things-preview'
import Footer from '../components/footer'

class ThingsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#FCFCFB' }}>
          <Helmet title={siteTitle} />
          <div className={styles.picture}>
            <div className={styles.square}>
              <p>Things</p>
            </div>
          </div>
          {/* <div className={styles.hero}>Things</div> */}
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ThingsPreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <Footer data={author.node} />
      </Layout>
    )
  }
}

export default ThingsIndex

export const pageQuery = graphql`
  query ThingsIndexQuery {
    allContentfulBlogPost(filter:{category:{eq:"things"}} , sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 360, maxHeight: 180, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
