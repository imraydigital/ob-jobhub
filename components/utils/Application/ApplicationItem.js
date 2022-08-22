import React from 'react'
//CSS
import styles from './ApplicationItem.module.css';

const ApplicationItem = ({key, children}) => {
  return (
    <div className={styles.applicationItem} key={key}>
        {children}
    </div>
  )
}

export default ApplicationItem