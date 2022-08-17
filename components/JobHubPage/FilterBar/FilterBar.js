import React from 'react'
//CSS
import styles from './FilterBar.module.css';

const FilterBar = ({handleClick}) => {
    return (
        <div className={styles.filterBarcontainer}>
                <p htmlFor='filter'>Filter Search Results</p>
                <select className={styles.select} id='filter' onChange={(e)=>handleClick(e.target.value)}>
                    <option>All</option>
                    <option>Warehousing</option>
                    <option>Factory/Production</option>
                    <option>Food Production</option>
                    <option>Care</option>
                    <option>Retail</option>
                    <option>Customer Service – Call Centre</option>
                    <option>Customer Service – Home Based</option>
                    <option>Security</option>
                    <option>Mental Health</option>
                    <option>First Aid</option>
                    <option>Cleaning</option>
                    <option>Door Supervisor</option>
                    <option>Stewarding</option>
                    <option>Hospitality</option>
                </select>
        </div>
    )
}

export default FilterBar