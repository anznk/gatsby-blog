import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from '../styles/article-preview.module.scss'

export default ({ article }) => (
  // <div className={styles.preview}>
  //   <Img alt="" fluid={article.heroImage.fluid} />
  //   <h3 className={styles.previewTitle}>
  //     <Link to={`/blog/${article.slug}`}>{article.title}</Link>
  //   </h3>
  //   <small>{article.publishDate}</small>
  //   <p
  //     dangerouslySetInnerHTML={{
  //       __html: article.description.childMarkdownRemark.html,
  //     }}
  //   />
  // </div>
  <Link to={`/things/${article.slug}`}>
    <div className={styles.preview}>
      <Img alt="" fluid={article.heroImage.fluid} />
      <div className={styles.mask}>
        <h3 className={styles.previewTitle}>
          {article.title}
        </h3>
      </div>
    </div>
  </Link>
  
)
