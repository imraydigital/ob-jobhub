import React from 'react'
//CSS
import styles from './AdminSidebar.module.css';
//Components
import AdminSidebarItem from './AdminSidebarItem';
import HomeItem from './Items/HomeItem';
import JobsItem from './Items/JobsItem';
import ApplicationsItem from './Items/ApplicationsItem';
import StatsItem from './Items/StatsItem';

const AdminSidebar = ({switchRoute}) => {
  return (
    <div className={styles.adminSidebar__container}>
        <ul>
            <AdminSidebarItem item={<HomeItem clickHandler={switchRoute} />} active />
            <AdminSidebarItem item={<JobsItem clickHandler={switchRoute} />}  />
            <AdminSidebarItem item={<ApplicationsItem clickHandler={switchRoute} />} />
            <AdminSidebarItem item={<StatsItem clickHandler={switchRoute} />}/>
        </ul>
    </div>
  )
}

export default AdminSidebar