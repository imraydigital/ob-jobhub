import React, {useState} from 'react'
//CSS
import styles from './JobPopup.module.css';
//Components
import LoadingIcon from '../LoadingIcon/LoadingIcon';

const JobPopup = ({ data }) => {
    const [loading, setLoading] = useState(true);

    if(loading){
        return <LoadingIcon/>
    } else if(!loading && !data) {
        return <p>No data exists.</p>
    } else {
        return <p>data goes here</p>
    }
}

export default JobPopup