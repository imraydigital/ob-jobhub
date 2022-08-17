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
          <Link href={`/jobs/${item._id}`}>
            <a>
              <Card banner key={item._id} title={`${item.jobTitle} - ${item.location}`} text={item.category} image={item.image}/>
            </a>
          </Link>
        )
      })}

    </div>
  )
}

export default JobList