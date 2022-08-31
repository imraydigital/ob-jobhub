import React, { useState } from 'react'
//CSS
import styles from '../../components/AdminDashboard/Admin.module.css';
import AdminSidebar from '../../components/AdminDashboard/AdminSidebar';
import AdminMain from '../../components/AdminDashboard/AdminMain';
//Components
import LoadingIcon from '../../components/utils/LoadingIcon/LoadingIcon';

const Admin = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [authenticated, setAuthenticated] = useState(false);

    const [routes, setRoutes] = useState({
        home: true,
        jobs: false,
        applications: false,
        stats: false,
        appSingleView: false,
        appJobView: false
    })

    const [auth, setAuth] = useState({
        pw1: 0,
        pw2: 0,
        pw3: 0,
        pw4: 0
    })

    const checkAuth = async (pinObj) => {
        setIsLoading(true);
        let authPass;
        await fetch('/api/auth')
        .then(res => res.json())
        .then(data => {
            authPass = data;
        });
        if (authPass.pw1 == pinObj.pw1 && authPass.pw2 == pinObj.pw2 && authPass.pw3 == pinObj.pw3 && authPass.pw4 == pinObj.pw4) {
            setAuthenticated(true);
            setIsLoading(false);
        } else {
            setAuthenticated(false);
            setIsLoading(false);
        }
    }

    if (authenticated && !isLoading) {
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
    } else if(!authenticated && !isLoading) {
        return (
            <div className={styles.authFormContainer}>
                <h2>Please enter your pin to access the dashboard</h2>
                <form onSubmit={async (e)=>{
                    e.preventDefault();
                    await checkAuth(auth);
                }}>
                    <div className={styles.pinContainer}>
                        <input type="password" name='pw1' onChange={(e) => {
                            setAuth((prevState) => {
                                return {
                                    ...prevState,
                                    [e.target.name]: e.target.value
                                }
                            })
                        }} />
                        <input type="password" name='pw2' onChange={(e) => {
                            setAuth((prevState) => {
                                return {
                                    ...prevState,
                                    [e.target.name]: e.target.value
                                }
                            })
                        }} />
                        <input type="password" name='pw3' onChange={(e) => {
                            setAuth((prevState) => {
                                return {
                                    ...prevState,
                                    [e.target.name]: e.target.value
                                }
                            })
                        }} />
                        <input type="password" name='pw4' onChange={(e) => {
                            setAuth((prevState) => {
                                return {
                                    ...prevState,
                                    [e.target.name]: e.target.value
                                }
                            })
                        }} />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    } else {
        return <LoadingIcon />
    }


}

export default Admin