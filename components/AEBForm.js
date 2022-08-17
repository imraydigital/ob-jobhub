import React from 'react'
//CSS
import styles from '../styles/EligibilityForm.module.css';

const AEBForm = ({ handleClick }) => {
  return (
    <>
      <div className={styles.efc__input__date}>
        <label>Please enter your date of birth</label>
        <input type="date" name="dob" onChange={(e) => {
          handleClick((prevState) => {
            return {
              ...prevState,
              [e.target.name]: new Date(e.target.value).toLocaleDateString()
            }
          })
        }} />
      </div>
      <input type="text" placeholder="Enter postcode" name="postcode" onChange={(e) => {
        handleClick((prevState) => {
          return {
            ...prevState,
            [e.target.name]: e.target.value
          }
        })
      }} />
      <div>
        <label>Have you lived in the UK/EU for the past 3 years?</label>
        <input type="checkbox" name="livedInUK" onChange={(e) => {
          handleClick((prevState) => {
            return {
              ...prevState,
              [e.target.name]: !prevState.livedInUK
            }

          })
        }} />
      </div>
      <div>
        <label>Have you got a National Insurance Number?</label>
        <input type="checkbox" name="niNumber" onChange={(e) => {
          handleClick((prevState) => {
            return {
              ...prevState,
              [e.target.name]: !prevState.niNumber
            }

          })
        }} />
      </div>
    </>

  )
}

export default AEBForm