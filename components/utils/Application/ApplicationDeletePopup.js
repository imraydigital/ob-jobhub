import React from 'react'
//CSS
import styles from './ApplicationDeletePopup.module.css';

const ApplicationDeletePopup = ({togglePopup, data, updateApplicationsState}) => {

    //DELETE APPLICATION FROM DB
    const deleteApplication = async (id) => {
        await fetch(`/api/applications/${data._id}`, {
            method: 'DELETE',
            // Adding headers to the request
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
            .then(res => res.json())
            .then(data => {
                updateApplicationsState((prevState) => {
                    return [
                      ...prevState.filter(item => {
                        return item._id !== data._id
                      })
                    ]
                  });
              togglePopup();
            })
    }

  return (
    <div className={styles.container}>
        <h3>Are you sure you want to permanently delete this application for {`${data.firstName} ${data.lastName}`}?</h3>
        <h6>IMPORTANT: This action will be irreversible</h6>
        <div className={styles.actionButtons}>
            <button className={styles.yes} onClick={()=>{
                deleteApplication(data._id);
            }}>Yes - Delete</button>
            <button className={styles.no} onClick={()=>{
                togglePopup();
            }}>No - Keep</button>
        </div>
    </div>
  )
}

export default ApplicationDeletePopup