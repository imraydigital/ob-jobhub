import React, {Fragment, useState, useEffect, useContext} from 'react'
import styles from '../AdminMain.module.css';
import appStyles from '../../utils/Application/ApplicationItem.module.css';
//Components
import LoadingIcon from '../../utils/LoadingIcon/LoadingIcon';
import ApplicationItem from '../../utils/Application/ApplicationItem';
import Popup from '../../utils/Popup/Popup';
import ApplicationPopup from '../../utils/Application/ApplicationPopup';

const Applications = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [applicationData, setApplicationData] = useState([]);
    const [applicationPopupData, setApplicationPopupData] = useState({});
    const [showPopup, setShowPopup] = useState(false);

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

    useEffect(()=>{
        getApplications();
    },[]);

    if(!isLoading){
    return (
        <Fragment>
            {showPopup && <Popup togglePopup={togglePopup} component={<ApplicationPopup data={applicationPopupData}/>}/>}
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