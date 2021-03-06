import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from '../styles/index-preview.module.scss'

export default ({ article }) => (
  <Link to={`/food/${article.slug}`}>
  
    <div className={styles.preview}>
      <Img alt="" fluid={article.heroImage.fluid} />
      <div className={styles.mask}>
        <h3 className={styles.previewTitle}>
          {article.title}
        </h3>
        <p className={styles.previewTitle}>
          {article.tags}
        </p>
      </div>
    </div>
  </Link>
  
)
