import React, {useState} from 'react'
//CSS
import styles from './CreateJobPopup.module.css';

const CreateJobPopup = ({toggleCreateMode}) => {

    const [createJobData, setCreateJobData] = useState({});

    const createNewJob = async () => {
        await fetch('/api/jobs', {
            method: 'POST',
            body: JSON.stringify(createJobData),
            // Adding headers to the request
            headers: {
                "Content-type" : "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            window.alert('Job created successfully!');
            toggleCreateMode();
        })
    }

    const updateJobData = (e) => {
        e.preventDefault();
        setCreateJobData((prevState)=>{
            if(e.target.name !== 'tags'){
            return {
                ...prevState,
                [e.target.name] : e.target.value
            }
        } else {
            return {
                ...prevState,
                [e.target.name] : [e.target.value]
            }
        }
        });
    }


  return (
    <div className={styles.createJobPopup__Container}>
       <form onSubmit={(e)=>{
        e.preventDefault();
        createNewJob();
       }} className={styles.createJobPopup__Form}>
            <input placeholder='Job Title' name='jobTitle' onChange={(e)=> updateJobData(e)} />
            <input placeholder='Category' name='category' onChange={(e)=> updateJobData(e)} />
            <textarea placeholder='Job description' name='description' onChange={(e)=> updateJobData(e)} />
            <textarea placeholder='Job details' name='details' onChange={(e)=> updateJobData(e)} />
            <input placeholder='Location' name='location' onChange={(e)=> updateJobData(e)} />
            <select name='tags' onChange={(e)=> updateJobData(e)} >
                <option>AEB</option>
                <option>SSU</option>
                <option>Both</option>
            </select>
            <input placeholder='Salary' name='salary' onChange={(e)=> updateJobData(e)} />
            <input type='submit' value='Create Job'/>
       </form>
    </div>
  )
}

export default CreateJobPopup