import React from 'react';
import styles from "./Navlist.module.css"

function Navlist() {
  
  return (
    <ul className={styles.listWrapper}>
        <li className={styles.navList}><a href="#home">Home</a></li>
        <li className={styles.navList}><a href="#attorneys">Attorneys</a></li>
        <li className={styles.navList}><a href="#practice-areas">Practice Areas</a></li>
        <li className={styles.navList}><a href="#about-us">About Us</a></li>
    </ul>
  )
}

export default Navlist;