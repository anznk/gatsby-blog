import React from 'react'
import Img from 'gatsby-image'

import styles from '../styles/hero.module.scss'

export default ({ data }) => (
  // <div className={styles.hero}>
  //   <Img
  //     className={styles.heroImage}
  //     alt={data.name}
  //     fluid={data.heroImage.fluid}
  //   />
  //   <div>aaa</div>
  // </div>
  <div>
    {/* <div className={styles.main}></div>
      
    <div className={styles.contents}>
      <div className={styles.contents_inner}>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>
      </div>
    </div> */}
    <div className={styles.picture}>
      <div className={styles.square}>
        <p>Life in Vancouver</p>
      </div>
    </div>
  </div>
)
