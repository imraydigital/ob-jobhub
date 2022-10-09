import React, { useState, useEffect } from 'react'
//CSS
import styles from './EditJobPopup.module.css';
//Components
import LoadingIcon from '../LoadingIcon/LoadingIcon'

const EditJobPopup = ({ toggleEditMode, jobId, updateJobsDataState }) => {

  const [jobData, setJobData] = useState({});

  //GET JOB DATA
  const getJobData = async (id) => {
    await fetch(`/api/jobs/${id}`)
      .then(res => res.json())
      .then(data => {
        setJobData(data);
        setIsLoading(false);
      })
  }

  //UPDATE DATA ON DB
  const updateData = async (jobData) => {
    await fetch(`/api/jobs/${jobData._id}`, {
      method: 'PUT',
      body: JSON.stringify(jobData),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(data => {
      updateJobsDataState((prevState) => {
        return [
          ...prevState.filter(item => {
            return item._id !== data._id
          }),
          data
        ]
      });
      toggleEditMode();
      setIsLoading(false);
    })
  }

  //DELETE JOB FROM DB
  const deleteJobById = async () => {
    await fetch(`/api/jobs/${jobData._id}`, {
      method: 'DELETE',
      body: JSON.stringify(jobData),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(data => {
        updateJobsDataState((prevState) => {
          return [
            ...prevState.filter(item => {
              return item._id !== data._id
            })
          ]
        });
        toggleEditMode();
        setIsLoading(false);
      })
  }

  //ON CHANGE HANDLER
  const setFormData = (e) => {
    e.preventDefault();
    setJobData((prevState) => {
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
    })
  }

  useEffect(() => {
    getJobData(jobId);
  }, [jobId])

  const [isLoading, setIsLoading] = useState(true);

  if (!isLoading && jobData) {
    return (
      <div className={styles.editJobPopupContainer}>
        <h1>Edit existing job</h1>
        <form>
          <input placeholder='Job Title' value={jobData.jobTitle} name='jobTitle' onChange={(e) => (setFormData(e))} />
          <input placeholder='Category' value={jobData.category} name='category' onChange={(e) => (setFormData(e))} />
          <textarea placeholder='Description' value={jobData.description} name='description' onChange={(e) => (setFormData(e))} />
          <textarea placeholder='Details' value={jobData.details} name='details' onChange={(e) => (setFormData(e))} />
          <input placeholder='Location' value={jobData.location} name='location' onChange={(e) => (setFormData(e))} />
          <input placeholder='Tags' value={jobData.tags} name='tags' onChange={(e) => (setFormData(e))} />
          <input placeholder='Salary' value={jobData.salary} name='salary' onChange={(e) => (setFormData(e))} />
          <div className={styles.editJobPopupContainer__actions}>
            <button className={styles.cancel} onClick={(e) => {
              e.preventDefault()
              toggleEditMode();
            }}>Cancel</button>
            <button onClick={(e) => {
              e.preventDefault();
              setIsLoading(true);
              updateData(jobData);
            }}>Save</button>
            <button className={styles.delete} onClick={(e) => {
              e.preventDefault();
              deleteJobById(jobId);
            }}>Delete Job</button>
          </div>
        </form>
      </div>
    )
  } else {
    return <LoadingIcon />
  }
}

export default EditJobPopup