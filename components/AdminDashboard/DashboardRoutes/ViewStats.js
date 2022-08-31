import React, { Fragment } from 'react'
import styles from '../AdminMain.module.css';

const Stats = () => {
  return (
    <Fragment>
      <h6>Welcome to Orangebox Job Hub Admin Area</h6>
      <h1>View Insights</h1>
      <div className={styles.container}>
        Insights will appear here...
      </div>
    </Fragment>
  )
}

export default Stats