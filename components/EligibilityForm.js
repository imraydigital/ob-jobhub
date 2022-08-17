import React, { useState } from 'react'
//CSS
import styles from '../styles/EligibilityForm.module.css';
//Components
import Link from 'next/link'

const EligibilityForm = ({ show }) => {

  let isEligible = true;

  const cssClasses = [
    styles.efc,
    show === 'entered' ? styles.efcShow
      : show === 'exited' ? styles.efcHide
        : null
  ]

  const [eligibility, setEligibility] = useState({
    dob: '',
    unemployed: false,
    resident: false,
    location: '',
    source: ''
  })


  //const isEligible = Object.values(eligibility).every(value => value === true)

  return (
    <div className={cssClasses.join(' ')} id='eligibilityform'>
      <h1>Eligibility Questionnaire</h1>
      <form>
        <div className={styles.efc__input__date}>
          <label htmlFor='checkbox1'>What is your Date of Birth?</label>
          <input type='date' id='dob' name='dob' onChange={(e) => {
            setEligibility(prevState => {
              return {
                ...prevState,
                [e.target.name]: e.target.value
              }
            })
          }} required />
        </div>
        <div className={styles.efc__input__cb} >
          <label htmlFor='checkbox2'>Are you currently unemployed?</label>
          <input type='checkbox' name='unemployed' id='checkbox2' placeholder='Placeholder text here' onChange={(e) => {
            setEligibility(prevState => {
              return {
                ...prevState,
                [e.target.name]: e.target.checked
              }
            })
          }} required />
        </div>
        <div className={styles.efc__input__cb}>
          <label htmlFor='checkbox3'>Have you lived in the UK for the past 3 years?</label>
          <input type='checkbox' name='uc' id='checkbox3' placeholder='Placeholder text here' onChange={(e) => {
            setEligibility(prevState => {
              return {
                ...prevState,
                [e.target.name]: e.target.checked
              }
            })
          }} required />
        </div>
        <div className={styles.efc__input__select}>
          <label htmlFor='checkbox3'>Where are you located?</label>
          <select name='location' id='location' onChange={(e) => {
            setEligibility(prevState => {
              return {
                ...prevState,
                [e.target.name]: e.target.value
              }
            })
          }} required>
            <option>Hartlepool</option>
            <option>Middlesbrough</option>
            <option>Redcar</option>
            <option>Darlington</option>
            <option>Stockton</option>
          </select>
        </div>
        <div className={styles.efc__input__select}>
          <label htmlFor='checkbox3'>How did you hear about us?</label>
          <select name='location' id='location' onChange={(e) => {
            setEligibility(prevState => {
              return {
                ...prevState,
                [e.target.name]: e.target.value
              }
            })
          }} required>
            <option>Jobcentre Plus</option>
            <option>Referral Partner</option>
            <option>Indeed</option>
            <option>Facebook</option>
            <option>Word of mouth</option>
          </select>
        </div>
        <div className={styles.efcFormBtn}>
          <Link href='/jobs'><button className={isEligible ? styles.eligible : styles.disabled}>{isEligible ? 'Find a Job' : 'Sorry you are not eligible'}</button></Link>
        </div>
      </form>
    </div>
  )
}

export default EligibilityForm