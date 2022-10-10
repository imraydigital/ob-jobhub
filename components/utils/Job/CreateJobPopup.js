import React, { useState } from 'react'
//CSS
import styles from './CreateJobPopup.module.css';

const CreateJobPopup = ({ toggleCreateMode }) => {

    const [createJobData, setCreateJobData] = useState({});

    const createNewJob = async () => {
        await fetch('/api/jobs', {
            method: 'POST',
            body: JSON.stringify(createJobData),
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => {
                toggleCreateMode();
            })
    }

    const updateJobData = (e) => {
        e.preventDefault();
        setCreateJobData((prevState) => {
            if (e.target.name !== 'tags') {
                return {
                    ...prevState,
                    [e.target.name]: [e.target.value]
                }
            } else {
                let tags = e.target.value.split(',').map(item => item.trim(' '));
                return {
                    ...prevState,
                    [e.target.name]: [tags]
                }
            }
        });
    }


    return (
        <div className={styles.createJobPopup__Container}>
            <h1>Create new job</h1>
            <form className={styles.createJobPopup__Form}>
                <input placeholder='Job Title' name='jobTitle' onChange={(e) => updateJobData(e)} />
                <input placeholder='Category' name='category' onChange={(e) => updateJobData(e)} />
                <textarea placeholder='Job description' name='description' onChange={(e) => updateJobData(e)} />
                <textarea placeholder='Job details' name='details' onChange={(e) => updateJobData(e)} />
                <input placeholder='Location' name='location' onChange={(e) => updateJobData(e)} />
                <input placeholder='Tags' name='tags' value={createJobData.tags} onChange={(e) => updateJobData(e)} />
                <input placeholder='Salary' name='salary' onChange={(e) => updateJobData(e)} />
                <div className={styles.createJobPopup__FormActions}>
                    <button type='submit' onClick={(e) => {
                        e.preventDefault();
                        createNewJob();
                    }}>Create Job</button>
                    <button className={styles.cancel} onClick={(e) => {
                        e.preventDefault();
                        toggleCreateMode();
                    }}>Cancel</button>
                </div>
            </form >
        </div >
    )
}

export default CreateJobPopup