import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
//Package Components
import Transition from 'react-transition-group/cjs/Transition';
//Components
import Navigation from '../components/Navigation'
import EligibilityForm from '../components/EligibilityForm'
import Footer from '../components/utils/Footer/Footer';

export default function Home() {

  const [showForm, setShowForm] = useState(false);
 
  const scrollToForm = () => {
    document.getElementById('formContainer').scrollIntoView({
      alignToTop: false,
      behavior: 'smooth'
    })
  }

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
 
  useEffect(()=>{
    if(showForm){
      setTimeout(()=>{
        scrollToForm()
      },300)
      } else {
        scrollToTop()
      }
  },[showForm])


  return (
    <div className={styles.container}>
      <Head>
        <title>Orangebox Training | Find a job</title>
        <link rel="icon" href="/ob.ico" />
      </Head>
      <Navigation />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Orangebox Training Solutions
        </h1>
        <h2 className={styles.subtitle}>Job Hub</h2>
        <p className={styles.description}>
          Click &apos;Get Started&apos; to find your dream job with us today!
        </p>
        <Link href={'/jobs'}><button className={styles.getStartedBtn}>Get Started</button></Link>
      </main>
      <Footer/>
    </div>
  )
}
