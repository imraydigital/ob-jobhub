import React, { useState } from 'react'
//CSS
import styles from './AdminMain.module.css';
//Routes
import HomeDashboard from './DashboardRoutes/HomeDashboard';
import ManageJobs from './DashboardRoutes/ManageJobs';
import ManageApplications from './DashboardRoutes/ManageApplications';
import ViewStats from './DashboardRoutes/ViewStats';

const AdminMain = ({routes, switchRoute}) => {

//Add switch statement


  return (
    <div className={styles.wrapper}>
      {routes.home ? (
        <HomeDashboard />
      ) : routes.jobs ? <ManageJobs/> : routes.applications ? <ManageApplications /> : <ViewStats />}

    </div>
  )
}

export default AdminMain