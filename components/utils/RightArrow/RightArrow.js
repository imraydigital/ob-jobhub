import React from 'react'
//CSS
import styles from './RightArrow.module.css';

const RightArrow = () => {
    return (
        <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
            <path fill="#FFF" d="M15.563 40.836a.997.997 0 0 0 1.414 0l15-15a.999.999 0 0 0 0-1.414l-15-15a.999.999 0 1 0-1.414 1.414l14.293 14.293-14.293 14.293a.999.999 0 0 0 0 1.414z" />
        </svg>
    )
}

export default RightArrow