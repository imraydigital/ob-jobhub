import React, { useState } from 'react'
//CSS
import styles from './JobList.module.css';
//Components
import Card from '../../utils/Card/Card';
import Link from 'next/link';

const JobList = ({ data }) => {


  return (
    <div className={styles.jobListContainer}>

      {data.map((item) => {
        return (
          <Link href={`/jobs/${item._id}`} key={item._id}>
            <a>
              <Card banner title={`${item.jobTitle} - ${item.location}`} text={item.category} image={item.image}/>
            </a>
          </Link>
        )
      })}

    </div>
  )
}

export default JobList