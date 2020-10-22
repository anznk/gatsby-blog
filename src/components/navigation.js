import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/navigation.module.scss'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/things/">Things</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/food/">Food</Link>
      </li>
    </ul>
  </nav>
)
