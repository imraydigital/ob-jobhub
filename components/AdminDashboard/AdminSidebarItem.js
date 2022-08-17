import React from 'react'
//CSS
import styles from './AdminSidebarItem.module.css';

const AdminSidebarItem = ({item, active}) => {
  return (
    <li className={`${styles.item} ${active && styles.active}`}>
        {item}
    </li>
  )
}

export default AdminSidebarItem