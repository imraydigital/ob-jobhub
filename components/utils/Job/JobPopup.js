import React, {useState, useEffect} from 'react'
//CSS
import styles from '../../AdminDashboard/AdminMain.module.css';
import appStyles from '../../utils/Application/ApplicationItem.module.css';
//Components
import LoadingIcon from '../LoadingIcon/LoadingIcon';
import ApplicationItem from '../Application/ApplicationItem';

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

   useEffect(()=>{
    getApplicationsByJob(jobId);
   },[])

    if(!isLoading && applicationsData.length > 0) {
    return (
            <div className={styles.container}>
                <h6>{`${jobData[0].jobTitle} - ${jobData[0].location}`}</h6>
                {applicationsData.map(application=>{
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
                            <div className={`${appStyles.applicantContainer__button}`}>
                                <button onClick={()=>{
                                }}>Show Details</button>
                            </div>
                        </ApplicationItem>
                        )
                })}
            </div>
    )} else if(!isLoading && applicationsData.length === 0) {
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