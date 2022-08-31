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
            <AdminSidebarItem item={<HomeItem switchRouteHandler={switchRoute} />} />
            <AdminSidebarItem item={<JobsItem switchRouteHandler={switchRoute} />}  />
            <AdminSidebarItem item={<ApplicationsItem switchRouteHandler={switchRoute} />} />
            <AdminSidebarItem item={<StatsItem switchRouteHandler={switchRoute} />}/>
        </ul>
    </div>
  )
}

export default AdminSidebar