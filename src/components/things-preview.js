import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from '../styles/all-preview.module.scss'

export default ({ article }) => (
  <Link to={`/things/${article.slug}`} style={{ textDecoration: 'none' }}>
    <div className={styles.box}>
      <div className={styles.mask}>
        <div className={styles.preview}>
          <Img alt="" fluid={article.heroImage.fluid} />        
        </div>
        <p className={styles.date}>{article.publishDate}</p>
        <h3 className={styles.title}> {article.title}</h3>
        <div className={styles.details}>
          <p
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </div>
  </Link>

)
