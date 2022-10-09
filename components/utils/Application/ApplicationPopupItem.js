import React, { useState } from 'react'
//CSS
import appStyles from '../../utils/Application/ApplicationItem.module.css';
import styles from './ApplicationPopupItem.module.css';

const ApplicationPopupItem = ({ application }) => {

    const [showApplicationDetails, setShowApplicationDetails] = useState(false);

    return (
        <div className={styles.applicantPopupContainer}>
            <div className={styles.applicantTitleContainer}>
                <div className={appStyles.applicantContainer__title}>
                    <p>Applicant</p>
                    <div className={appStyles.applicantContainer__name}>
                        <p>{application.firstName}</p>
                        <p>{application.lastName}</p>
                    </div>
                </div>
                <div className={`${appStyles.applicantContainer__button}`}>
                    <button className={showApplicationDetails ? styles.active : styles.inactive} onClick={() => {
                        setShowApplicationDetails(!showApplicationDetails)
                    }}>{showApplicationDetails ? 'Hide' : 'Show'} Details</button>
                </div>
            </div>
            {showApplicationDetails &&

                <div className={styles.applicantDetailsContainer}>
                    <h6>Application Details</h6>
                    <ul>
                        <li><strong>Email:</strong> {application.email}</li>
                        <li><strong>Date of Birth:</strong> {application.dob}</li>
                        <li><strong>Contact:</strong> {application.telephone}</li>
                        <li><strong>Postcode:</strong> {application.postcode}</li>
                        <li><strong>Lived in the UK for the past 3 years?</strong> {application.livedInUK ? 'Yes' : 'No'}</li>
                        <li><strong>Currently studying?</strong> {application.studying ? 'Yes' : 'No'}</li>
                        <li><strong>Currently unemployed?</strong> {application.unemployed ? 'Yes' : 'No'}</li>
                    </ul>
                </div>

            }
        </div>
    )
}

export default ApplicationPopupItem