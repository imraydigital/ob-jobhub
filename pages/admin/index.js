import React, { useState } from 'react'
//CSS
import styles from '../../components/AdminDashboard/Admin.module.css';
import AdminSidebar from '../../components/AdminDashboard/AdminSidebar';
import AdminMain from '../../components/AdminDashboard/AdminMain';

const Admin = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [authenticated, setAuthenticated] = useState(false);

    const [routes, setRoutes] = useState({
        home: true,
        jobs: false,
        applications: false,
        stats: false
    })

    if (authenticated) {
        return (

            <div className={styles.wrapper}>
                <div className={styles.adminPageLeft}>
                    <AdminSidebar switchRoute={setRoutes} />
                </div>
                <div className={styles.adminPageRight}>
                    <AdminMain routes={routes} />
                </div>
            </div>

        )
    } else {
        return (
            <div className={styles.authFormContainer}>
                <h2>Please enter your pin to access the dashboard</h2>
                <form>
                    <input type="password"  />
                    <input type="password"  />
                    <input type="password"  />
                    <input type="password"  />
                </form>
            </div>
        )
    }


}

export default Admin