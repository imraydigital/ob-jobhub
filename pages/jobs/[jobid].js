import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
//Components
import Navigation from '../../components/Navigation';
import Breadcrumbs from '../../components/utils/Breadcrumbs/Breadcrumbs';
import JobIdEligibility from '../../components/JobIdPage/JobIdEligibility';
import LoadingIcon from '../../components/utils/LoadingIcon/LoadingIcon';

//CSS
import styles from '../../components/JobIdPage/JobIdPage.module.css';

const SingleJobItem = () => {

  const router = useRouter();
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getJobById = async () => {
    await fetch(`/api/jobs/${router.query.jobid}`)
      .then(res => res.json())
      .then(data => {
        setJobData(data);
        setLoading(false);
      })
  }


  useEffect(() => {
    if (router.isReady) {
      getJobById();
    }
  }, [router.isReady])

  if (!loading && jobData) {
    return (

      <div className={styles.jobIdPageContainer}>
        <Navigation />
        <div className={styles.jobIdPageContainer__hero}>

          <h1 className={styles.jobIdPageContainer__heroTitle}>{`${jobData.jobTitle} - ${jobData.location}`}</h1>
          <h3 className={styles.jobIdPageContainer__heroSalary}>Salary: {jobData.salary}</h3>
          <div className={styles.jobIdPageContainer__heroBreadcrumbs}>
            <Breadcrumbs current={jobData.jobTitle} />
          </div>
        </div>
        <div className={styles.jobIdPageContainer__main}>
          <div className={styles.jobIdPageContainer__main__jobdesc}>
            <h1>Job Description</h1>
            <p>{jobData.description}</p>
            <h6>Details</h6>
            <p>{jobData.details}</p>
          </div>
          {<JobIdEligibility job={jobData} />}
        </div>
      </div>
    )
  } else {
    return (
      <LoadingIcon />
    )
  }
}

export default SingleJobItem;