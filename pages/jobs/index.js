import React, { useState, useEffect } from 'react'
import Head from 'next/head'
//CSS
import styles from '../../components/JobHubPage/JobHubPage.module.css';
//Components
import Description from '../../components/JobHubPage/Description/Description';
import FilterBar from '../../components/JobHubPage/FilterBar/FilterBar';
import JobList from '../../components/JobHubPage/jobList/JobList';
import Footer from '../../components/utils/Footer/Footer';
import LoadingIcon from '../../components/utils/LoadingIcon/LoadingIcon';

const Index = () => {

    let eligible = true;

    const [category, setCategory] = useState('All')
    const [loading, setLoading] = useState(true);
    const [jobsData, setJobsData] = useState(null);

    const getJobsData = async () => {
        await fetch('/api/jobs')
            .then(res => res.json())
            .then(data => {
                setJobsData(data);
                setLoading(false);
            })
    }

    useEffect(()=>{
        getJobsData();
    },[])


    if (!loading && jobsData && document.readyState === 'complete') {

        const filteredJobs = jobsData.filter((job)=>{
            if(category === 'All'){
                return ClipboardItem;
            } else {
                return job.category === category;
            }
        })

        return (
            <>
                <Head>
                    <title>Job Hub | Orangebox Training</title>
                    <link rel="icon" href="/ob.ico" />
                </Head>
                <div className={styles.jobsPageContainer}>
                    <div className={styles.main}>
                        <Description/>
                        <FilterBar handleClick={setCategory} />
                        {filteredJobs && <JobList data={filteredJobs} />}
                    </div>
                </div>
                <Footer />
            </>
        )
    } else {
        return (
            <LoadingIcon />
        )
    }
}

export default Index