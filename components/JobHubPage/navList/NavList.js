import React, {useState} from 'react'
//CSS
import styles from './NavList.module.css'

const NavList = ({handleClick}) => {

    const [activeLinks, setActiveLinks] = useState({
        all: true,
        employability: false,
        hs: false
    })

  return (
    <div className={styles.navListContainer}>
        <ul className={styles.navList}>
            <li className={activeLinks.all && styles.active} onClick={(e)=>{
                setActiveLinks({
                    all: true,
                    employability: false,
                    hs: false
                });
                handleClick('All');
            }}>All</li>
            <li className={activeLinks.employability && styles.active} onClick={(e)=>{
                setActiveLinks({
                    all: false,
                    employability: true,
                    hs: false
                });
                handleClick('Warehousing');
            }}>Warehousing</li>
            <li className={activeLinks.hs && styles.active} onClick={(e)=>{
                setActiveLinks({
                    all: false,
                    employability: false,
                    hs: true
                });
                handleClick('Food Production');
            }}>Food Production</li>
        </ul>
    </div>
  )
}

export default  NavList