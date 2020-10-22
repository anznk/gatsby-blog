import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Footer from '../components/footer'
import Layout from '../components/layout'
import ArticlePreview from '../components/index-article-preview'
import ThingsPreview from '../components/index-things-preview'
import FoodPreview from '../components/index-food-preview'
import Hero from '../components/hero'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const maxValue = 4;
    const things = "things";
    const food = "food";
    const postThings = posts.filter(node => {
      return node.node.category === things;
    });
    const postFood = posts.filter(node => {
      return node.node.category === food;
    });

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#FCFCFB' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className="wrapper">
            <h2 className="section-headline"><Link to="/all/" style={{ textDecoration: 'none' }}>All articles</Link></h2>
            <ul className="article-list-index">
              {posts.slice(0,maxValue).map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
            <p className="next-link"><Link to="/all/">Read more ></Link></p>
          </div>
          <div className="wrapper">
            <h2 className="section-headline"><Link to="/things/" style={{ textDecoration: 'none' }}>Things</Link></h2>
            <ul className="article-list-index">
              {postThings.slice(0,maxValue).map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ThingsPreview article={node} />
                  </li>
                )
              })}
            </ul>
            <p className="next-link"><Link to="/things/">Read more ></Link></p>
          </div>
          <div className="wrapper">
            <h2 className="section-headline"><Link to="/food/" style={{ textDecoration: 'none' }}>Food</Link></h2>
            <ul className="article-list-index">
              {postFood.slice(0,maxValue).map(({ node }) => {
                if (node.category === 'food') {
                  return (
                    <li key={node.slug}>
                      <FoodPreview article={node} />
                    </li>
                  )
                }
              })}
            </ul>
            <p className="next-link"><Link to="/food/">Read more ></Link></p>
          </div>
        </div>
        <Footer data={author.node} />
      </Layout>
    )
  }

}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          category
          heroImage {
            fluid(maxWidth: 240, maxHeight: 240, resizingBehavior: SCALE) {
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
              maxWidth: 1500
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
