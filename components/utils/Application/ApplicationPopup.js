import React from 'react'
//CSS
import styles from './ApplicationPopup.module.css';

const ApplicationPopup = ({data}) => {
    if (!data) {
        return (
            <p>No application data.</p>
        )
    } else {
        return (
            <div className={styles.applicationPopup}>
                <div className={styles.applicantDetails}>
                    <h3>Personal Details</h3>
                    <div className={styles.applicantDetails__name}>
                        <p>Name:</p>
                        <p>{data.firstName}</p>
                        <p>{data.lastName}</p>
                    </div>
                    <p>Email: {data.email}</p>
                    <p>Date of birth: {data.dob}</p>
                    <p>Contact Number: {data.telephone}</p>
                    <p>Postcode: {data.postcode}</p>
                    <p>Lived in the UK for the past 3 years? {data.livedInUK ? 'Yes' : 'No'}</p>
                    <h3>Application Details</h3>
                    <p>Applied for: {data.jobId}</p>
                    <p>Currently studying? {data.studying ? 'Yes' : 'No'}</p>
                    <p>Currently unemployed? {data.unemployed ? 'Yes' : 'No'}</p>
                </div>
            </div>
        )
    }

}

export default ApplicationPopup