import React, {Fragment, useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../AdminMain.module.css';
import appStyles from '../../utils/Application/ApplicationItem.module.css';
//Components
import LoadingIcon from '../../utils/LoadingIcon/LoadingIcon';
import ApplicationItem from '../../utils/Application/ApplicationItem';
import Popup from '../../utils/Popup/Popup';
import ApplicationPopup from '../../utils/Application/ApplicationPopup';
import DeletePopup from '../../utils/Application/ApplicationDeletePopup';

const Applications = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [applicationData, setApplicationData] = useState([]);
    const [applicationPopupData, setApplicationPopupData] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);

    const getApplications = async () => {
        await fetch('/api/applications')
            .then(res => res.json())
            .then(data => {
                setApplicationData(data);
                setIsLoading(false);
            })
    }

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const toggleDeletePopup = () => {
        setShowDeletePopup(!showDeletePopup);
    }

    useEffect(()=>{
        getApplications();
    },[applicationData]);

    if(!isLoading){
    return (
        <Fragment>
            {showPopup && <Popup togglePopup={togglePopup} component={<ApplicationPopup data={applicationPopupData}/>}/>}
            {showDeletePopup && <Popup togglePopup={toggleDeletePopup} component={<DeletePopup togglePopup={toggleDeletePopup} data={applicationPopupData} updateApplicationsState={setApplicationData}/>}/>}
            <h6>Welcome to Orangebox Job Hub Admin Area</h6>
            <h1>Manage Applications</h1>
            <div className={styles.container}>
                {applicationData.map((application)=>{
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
                                        setApplicationPopupData(application);
                                        togglePopup();
                                }}>View Application</button>
                                <button className={appStyles.deleteBtn} onClick={()=>{
                                        setApplicationPopupData(application);
                                        toggleDeletePopup();
                                }}><Image alt='delete-icon' src='/images/trash.png' height={32} width={32}></Image></button>
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