import React, { useState } from 'react'
//CSS
import styles from './JobIdEligibility.module.css';
import formStyles from '../../styles/EligibilityForm.module.css';
//Components
import AEBForm from '../AEBForm';
import SSUForm from '../SSUForm';

const JobIdEligibility = ({ job }) => {

    let isEligible;

    const [formData, setFormData] = useState({
        jobId: job._id,
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        dob: null,
        postcode: '',
        livedInUK: false,
        niNumber: false,
        unemployed: false,
        studying: false
    })

    const [applicationSubmitted, setApplicationSubmitted] = useState(false)


    return (
        <div className={styles.container}>
            <form onSubmit={async (e) => {
                e.preventDefault();
                //Sent POST request to API
                await fetch('/api/applications', {
                    method: 'POST',
                    body: JSON.stringify(formData),

                    // Adding headers to the request
                    headers: {
                        "Content-type" : "application/json; charset=UTF-8"
                    }
                }).then(response => response.json())
                    .then(json => {
                        window.alert(json.message)
                        setApplicationSubmitted(true);
                    });

            }}>
                <div className={styles.splitInput}>
                    <input type="text" placeholder="First name" name="firstName" required onChange={(e) => {
                        setFormData((prevState) => {
                            return {
                                ...prevState,
                                [e.target.name]: e.target.value
                            }
                        })
                    }} />
                    <input type="text" placeholder="Last name" name="lastName" required onChange={(e) => {
                        setFormData((prevState) => {
                            return {
                                ...prevState,
                                [e.target.name]: e.target.value
                            }
                        })
                    }} />
                </div>
                <div className={styles.splitInput}>
                    <input type="email" placeholder="Email address" name="email" required onChange={(e) => {
                        setFormData((prevState) => {
                            return {
                                ...prevState,
                                [e.target.name]: e.target.value
                            }
                        })
                    }} />
                    <input type="tel" placeholder="Telephone Number" name="telephone" required onChange={(e) => {
                        setFormData((prevState) => {
                            return {
                                ...prevState,
                                [e.target.name]: e.target.value
                            }
                        })
                    }} />
                </div>
                {job.tags.includes("aeb") && job.tags.includes("ssu") ? <SSUForm handleClick={setFormData} /> : job.tags.includes("aeb") && !job.tags.includes("ssu") ? <AEBForm handleClick={setFormData} /> : <SSUForm handleClick={setFormData} />}
                {!applicationSubmitted ? <button type="submit">Apply</button> : <button className={formStyles.disabled}>Application Submitted!</button>}
            </form>
        </div>
    )
}

export default JobIdEligibility