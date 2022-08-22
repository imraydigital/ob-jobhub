import React from 'react'
//CSS
import styles from './JobCard.module.css';

const JobCard = ({ key, children, item }) => {

  return (
    <div key={key} className={styles.jobCard} style={item && { backgroundImage: `url('/images/${item.image}')` }}>
      <div className={item ? styles.jobListWrapper__bg : styles.jobListWrapper__bg__addJob }>
        {children}
      </div>
    </div>
  )
}

export default JobCard