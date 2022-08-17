import React from 'react'
import Image from 'next/image'
//CSS
import styles from './LoadingIcon.module.css'

const LoadingIcon = () => {
    return (
        <div className={styles.loading}>
            <Image src={'/images/loading.gif'} height={100} width={100} alt="loading">
            </Image>
        </div>
    )
}

export default LoadingIcon