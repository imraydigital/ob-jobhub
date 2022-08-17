import React from 'react'
//CSS
import styles from './CardInfo.module.css';

const CardInfo = ({title}) => {
  return (
    <div className={styles.cardInfo}>
        <h3>{title}</h3>
    </div>
  )
}

export default CardInfo