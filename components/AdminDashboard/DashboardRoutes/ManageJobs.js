import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image';
import styles from '../AdminMain.module.css';
import jobCardStyles from '../../utils/Job/JobCard.module.css';
import manageJobStyles from './ManageJobs.module.css';
//Components
import LoadingIcon from '../../utils/LoadingIcon/LoadingIcon';
import JobCard from '../../utils/Job/JobCard';
import Popup from '../../utils/Popup/Popup';
import JobPopup from '../../utils/Job/JobPopup';
import CreateJobPopup from '../../utils/Job/CreateJobPopup';
import EditJobPopup from '../../utils/Job/EditJobPopup';

const ManageJobs = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [jobsData, setJobsData] = useState([]);
    const [jobId, setJobId] = useState('');
    const [showPopup, setShowPopup] = useState(false)
    const [createMode, setCreateMode] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const getJobs = async () => {
        await fetch('/api/jobs')
            .then(res => res.json())
            .then(data => {
                setJobsData(data.reverse());
                setIsLoading(false);
            })
    }

    const toggleJobPopup = () => {
        setShowPopup(!showPopup);
    }

    const toggleCreateMode = () => {
        setCreateMode(!createMode);
    }

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    useEffect(() => {
        getJobs();
    }, [jobsData]);

    if (!isLoading) {
        return (
            <Fragment>
                { showPopup && <Popup togglePopup={toggleJobPopup} component={<JobPopup jobId={jobId} jobData={jobsData.filter(item => item._id === jobId)}/>} />}
                { createMode && <Popup togglePopup={toggleCreateMode} component={<CreateJobPopup toggleCreateMode={toggleCreateMode}/>} />}
                { editMode && <Popup togglePopup={toggleEditMode} component={<EditJobPopup toggleEditMode={toggleEditMode} jobId={jobId} updateJobsDataState={setJobsData}/>} />}
                <h6>Welcome to Orangebox Job Hub Admin Area</h6>
                <h1>Manage Jobs</h1>
                <div className={styles.container}>
                    <div className={jobCardStyles.jobListWrapper}>
                        <JobCard key='createNewJob'>
                            <h6>Create New Job</h6>
                            <button onClick={()=>{
                                toggleCreateMode();
                            }}>
                                <Image src={'/images/plus.png'} height='40' width='40' alt='Add'/>
                            </button>
                        </JobCard>
                        {jobsData.map((item) => {
                            return (
                                <JobCard key={item._id} item={item}>
                                    <div className={manageJobStyles.jobDetails__body}>
                                        <h6>{item.jobTitle}</h6>
                                        <p>{`- ${item.location}`}</p>
                                    </div>
                                    <div className={manageJobStyles.jobDetails__footer}>
                                        <button className={jobCardStyles.edit} onClick={()=>{
                                            setJobId(item._id);
                                            toggleEditMode();
                                        }}>Edit Job</button>
                                        <button onClick={()=>{
                                            setJobId(item._id);
                                            toggleJobPopup();
                                        }}>View Applications</button>
                                    </div>
                                </JobCard>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <h6>Welcome to Orangebox Job Hub Admin Area</h6>
                <h1>Manage Jobs</h1>
                <div className={styles.container}>
                    <LoadingIcon/>
                </div>
            </Fragment>
        )
    }
}

export default ManageJobs