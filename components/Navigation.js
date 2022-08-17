import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
//CSS
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
      <Link href='/jobs'>
        <a>
          <Image src='/images/ob-logo-white.png' alt ="logo" width="210" height="80" />
        </a>
      </Link>
      <nav>
        <ul>
          <li>Find A Job</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation