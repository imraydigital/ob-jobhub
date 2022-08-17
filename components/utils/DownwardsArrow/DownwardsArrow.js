import React from 'react'
//CSS
import styles from './DownwardsArrow.module.css';

const DownwardsArrow = () => {
    return (
        <svg className={styles.downwardsArrow} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" fill="#FFF" />
        </svg>
    )
}

export default DownwardsArrow