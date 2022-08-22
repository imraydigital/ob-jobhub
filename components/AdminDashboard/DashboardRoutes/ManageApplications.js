import React, {Fragment, useState, useEffect} from 'react'
import styles from '../AdminMain.module.css';
import appStyles from '../../utils/Application/ApplicationItem.module.css';
//Components
import LoadingIcon from '../../utils/LoadingIcon/LoadingIcon';
import ApplicationItem from '../../utils/Application/ApplicationItem';

const Applications = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [applicationData, setApplicationData] = useState([]);

    const getApplications = async () => {
        await fetch('/api/applications')
            .then(res => res.json())
            .then(data => {
                setApplicationData(data);
                setIsLoading(false);
            })
    }

    useEffect(()=>{
        getApplications();
    },[applicationData]);

    if(!isLoading){
    return (
        <Fragment>
            <h6>Welcome to Orangebox Job Hub Admin Area</h6>
            <h1>Manage Applications</h1>
            <div className={styles.container}>
                {applicationData.reverse().map((application)=>{
                    return (
                        <ApplicationItem key={application._id}>
                            <div className={appStyles.applicantContainer}>
                                <div className={appStyles.applicantContainer__title}>
                                    <p>Applicant</p>
                                </div>
                                <div className={appStyles.applicantContainer__name}>
                                    <p>{application.firstName}</p>
                                    <p>{application.lastName}</p>
                                </div>
                            </div>
                            <div className={appStyles.applicantContainer__button}>
                                <button>View Application</button>
                            </div>
                        </ApplicationItem>
                    )

                })}
            </div>
        </Fragment>
    )} else {
        return (
            <Fragment>
                <h6>Welcome to Orangebox Job Hub Admin Area</h6>
                <h1>Manage Applications</h1>
                <div className={styles.container}>
                    <LoadingIcon/>
                </div>
            </Fragment>
        )
    }
}

export default Applications