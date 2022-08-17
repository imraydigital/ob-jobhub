import React from 'react';
import Link from 'next/link'
//CSS
import styles from './Breadcrumbs.module.css';
//Components
import RightArrow from '../RightArrow/RightArrow';

const Breadcrumbs = ({current}) => {
    return (
        <ul className={styles.breadcrumbs}>
            <li>
            <Link href='/'>
                    <a>
                        Home
                    </a>
                </Link>
            </li>
            <li><RightArrow/></li>
            <li>
                <Link href='/jobs'>
                    <a>
                        Jobs
                    </a>
                </Link>
            </li>
            <li><RightArrow /></li>
            <li>{current}</li>
        </ul>
    )
}

export default Breadcrumbs