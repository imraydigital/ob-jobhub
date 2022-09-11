import React from 'react'
//CSS
import styles from './Popup.module.css';

const Popup = ({component, togglePopup}) => {
  return (
    <div className={styles.popupContainer}>
        <div className={styles.popupContainer__body}>
            <div className={styles.popupContainer__body__header}>
                <button onClick={togglePopup}>X</button>
            </div>
            <div className={styles.popupContainer__body__content}>
                {component}
            </div>
        </div>
    </div>
  )
}

export default Popup