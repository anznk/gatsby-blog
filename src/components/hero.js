import React from 'react'
import styles from '../styles/hero.module.scss'

export default ({ data }) => (
  <div>
    <div className={styles.picture}>
      <div className={styles.square}>
        <p>Life in Vancouver</p>
      </div>
    </div>
  </div>
)
