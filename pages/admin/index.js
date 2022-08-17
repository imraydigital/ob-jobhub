import React, {useState} from 'react'
//CSS
import styles from '../../components/AdminDashboard/Admin.module.css';
import AdminSidebar from '../../components/AdminDashboard/AdminSidebar';
import AdminMain from '../../components/AdminDashboard/AdminMain';

const Admin = () => {
    
    const [routes, setRoutes] = useState({
        home: true,
        jobs: false,
        applications: false,
        stats: false
      })
    
    return (

        <div className={styles.wrapper}>
            <div className={styles.adminPageLeft}>
                <AdminSidebar switchRoute={setRoutes} />
            </div>
            <div className={styles.adminPageRight}>
                <AdminMain routes={routes}/>
            </div>
        </div>

    )
}

export default Admin