import React from 'react'
//CSS
import styles from './Description.module.css';

const Description = () => {
    return (
        <div className={styles.descriptionContainer}>
            <h6>Welcome to our Job Hub!</h6>
            <h2>Let us help you get on the employment ladder</h2>
            <p>At Orangebox we know what it takes to find a job. But we want to do more than find you a job – we want to give you the skills, qualifications and confidence to support you to build a career that you love. Have a look through the current roles we are recruiting for and the range of training courses we are running and if you have any questions one of our Learner Engagement Team will be on hand to give you all the information you need to climb on to the first rung.</p>
        </div>
    )
}

export default Description