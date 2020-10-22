import React from 'react'
import Img from 'gatsby-image'
import styles from '../styles/footer.module.scss'

export default ({ data }) => (
  <>
  <hr />
  <div className={styles.hero}>
    <div className={styles.heroBox}>
      <Img
        className={styles.heroImage}
        alt={data.name}
        fluid={data.heroImage.fluid}
      />
    </div>
    <div className={styles.heroBox}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroDetails}>{data.shortBio.shortBio}</p>
    </div>
  </div>
  <div className={styles.siteInfo}>
      ©2020 AnzuNaka All rights reserved.
  </div>
  </>

)
