import React from 'react'
//CSS
import styles from './CardBanner.module.css'

const CardBanner = ({text}) => {
  return (
    <div className={styles.cardBanner}>
        <p>{text}</p>
    </div>
  )
}

export default CardBanner