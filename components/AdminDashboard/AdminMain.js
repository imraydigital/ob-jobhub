import React from 'react'
//CSS
import styles from './AdminMain.module.css';
//Routes
import HomeDashboard from './DashboardRoutes/HomeDashboard';
import ManageJobs from './DashboardRoutes/ManageJobs';
import ManageApplications from './DashboardRoutes/ManageApplications';
import ViewStats from './DashboardRoutes/ViewStats';


const AdminMain = ({ routes, switchRoute }) => {

  const getApplicationData = async () => {
      try {
        await fetch('/api/applications')
            .then(res => res.json())
            .then(data => {
                data.reverse();
                setApplications(data);
            })
      } catch (error) {
        console.log(error)
      }
  }

  getApplicationData();

  return (

      <div className={styles.wrapper}>
        {routes.home ? (
          <HomeDashboard switchRouteHandler={switchRoute} />
        ) : routes.jobs ? <ManageJobs /> : routes.applications ? <ManageApplications /> : <ViewStats />}
      </div>

  )
}

export default AdminMain