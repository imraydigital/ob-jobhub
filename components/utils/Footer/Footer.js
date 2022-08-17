import React from 'react'
//Components
import Image from 'next/image'
//CSS
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>Powered by</p>
        <a href="https://imraydigital.co.uk">
          <Image src='/images/imray-digital.svg' id="idLogo" height={60} width={60} alt="imray-digital-logo"/>
        </a>
      </footer>
  )
}

export default Footer