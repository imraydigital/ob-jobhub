import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image';
import styles from '../AdminMain.module.css';
import jobCardStyles from '../../utils/Job/JobCard.module.css';
import manageJobStyles from './ManageJobs.module.css';
//Components
import LoadingIcon from '../../utils/LoadingIcon/LoadingIcon';
import JobCard from '../../utils/Job/JobCard';

const ManageJobs = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [jobsData, setJobsData] = useState([]);

    const getJobs = async () => {
        await fetch('/api/jobs')
            .then(res => res.json())
            .then(data => {
                setJobsData(data);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getJobs();
    }, [jobsData]);

    if (!isLoading) {
        return (
            <Fragment>
                <h6>Welcome to Orangebox Job Hub Admin Area</h6>
                <h1>Manage Jobs</h1>
                <div className={styles.container}>
                    <div className={jobCardStyles.jobListWrapper}>
                        <JobCard key='createNewJob'>
                            <h6>Create New Job</h6>
                            <button>
                                <Image src={'/images/plus.png'} height='40' width='40' alt='Add'/>
                            </button>
                        </JobCard>
                        {jobsData.reverse().map((item) => {
                            return (
                                <JobCard key={item._id} item={item}>
                                    <div className={manageJobStyles.jobDetails__body}>
                                        <h6>{item.jobTitle}</h6>
                                        <p>{`- ${item.location}`}</p>
                                    </div>
                                    <div className={manageJobStyles.jobDetails__footer}>
                                        <button className={jobCardStyles.edit}>Edit Job</button>
                                        <button>View Applications</button>
                                    </div>
                                </JobCard>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        )
    } else {
        return <LoadingIcon />
    }
}

export default ManageJobs