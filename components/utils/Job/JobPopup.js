import React, { useState, useEffect } from 'react'
//CSS
import styles from '../../AdminDashboard/AdminMain.module.css';
import appStyles from '../../utils/Application/ApplicationItem.module.css';
import jobPopupStyles from './JobPopup.module.css';
//Components
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import ApplicationPopupItem from '../Application/ApplicationPopupItem';

const JobPopup = ({ jobId, jobData }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [applicationsData, setApplicationsData] = useState([]);

    const getApplicationsByJob = async (id) => {
        await fetch(`/api/applications/job/${id}`)
            .then(res => res.json())
            .then(data => {
                data.reverse();
                setApplicationsData(data);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getApplicationsByJob(jobId);
    }, [])

    if (!isLoading && applicationsData.length > 0) {
        return (
            <div className={styles.container}>
                <div className={jobPopupStyles.header}>
                    <h4>{`${jobData[0].jobTitle} - ${jobData[0].location}`}</h4>
                    <h6>{applicationsData.length > 1 ? `${applicationsData.length} applications received` : `${applicationsData.length} application received`}</h6>
                </div>

                {applicationsData.map(application => {
                    return <ApplicationPopupItem key={application._id} application={application} />
                })}
            </div>
        )
    } else if (!isLoading && applicationsData.length === 0) {
        return (
            <div className={styles.container}>
                <h6>{`${jobData[0].jobTitle} - ${jobData[0].location}`}</h6>
                <p>No applications have been made yet.</p>
            </div>
        );
    } else {
        return <LoadingIcon />
    }
}

export default JobPopup