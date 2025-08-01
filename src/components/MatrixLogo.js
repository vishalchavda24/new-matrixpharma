"use client";
import Link from 'next/link'; 
import styles from '../styles/logo.module.css';


const MatrixLogo = () => {
  return (
    <>
    <Link href="/">
    <img className={styles.logoweb} src="/matrix-pharma.svg"></img>
    <img className={styles.logomob} src="/matrix-pharma-logo.png"></img>
    </Link>
    </>
  );
};

export default MatrixLogo;
