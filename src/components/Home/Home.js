import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import styles from "./Home.module.css"

function Home() {
  return (
    <div className={styles.homeWrapper} id='home'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home;