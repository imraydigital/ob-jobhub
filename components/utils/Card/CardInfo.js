import React from 'react'
//CSS
import styles from './CardInfo.module.css';

const CardInfo = ({title, switchRoute}) => {
  return (
    <div className={styles.cardInfo}>
        <h3 onClick={()=>{
          if(switchRoute){
            switch(title) {
              case 'Manage Jobs':
                return switchRoute(()=>{
                  return {
                    home: false,
                    jobs: true,
                    applications: false,
                    stats: false
                  }
                })
              case 'Manage Applications':
                return switchRoute(()=>{
                  return {
                    home: false,
                    jobs: false,
                    applications: true,
                    stats: false
                  }
                })
              case 'View Insights':
                return switchRoute(()=>{
                  return {
                    home: false,
                    jobs: false,
                    applications: false,
                    stats: true
                  }
                })
                default:
                  return switchRoute(()=>{
                    return {
                      home: true,
                      jobs: false,
                      applications: false,
                      stats: false
                    }
                  })
            }
          }
        }}>{title}</h3>
    </div>
  )
}

export default CardInfo