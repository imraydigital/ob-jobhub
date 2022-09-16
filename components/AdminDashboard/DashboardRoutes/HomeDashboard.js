import React, { Fragment } from 'react'
//CSS
import styles from '../AdminMain.module.css';
import layout from './HomeDashboard.module.css';
//Components
import Card from '../../../components/utils/Card/Card';

const HomeDashboard = ({switchRouteHandler}) => {
    return (
        <Fragment>
            <h6>Welcome to Orangebox Job Hub Admin Area</h6>
            <h1>Dashboard</h1>
            <div className={styles.container}>
                <div className={layout.cardList}>
                    <Card  title={'Manage Jobs'} image={'job-advert.jpg'} switchRoute={switchRouteHandler}/>
                    <Card  title={'Manage Applications'} image={'job-cv.jpg'} switchRoute={switchRouteHandler}/>
                    <Card  title={'View Insights'} image={'stats.jpg'} switchRoute={switchRouteHandler}/>
                </div>
            </div>
        </Fragment>
    )
}

export default HomeDashboard