import React from 'react';
import styles from "./IntroSection.module.css"

function IntroSection() {
  return (
    <div className={styles.introWrapper} id='attorneys'>
        <h1>Let's Introduce<br />Ourself</h1>
        <hr />
        <div>
            <h3>Criminal Lawyer</h3>
            <p>Amet minim mollit non deserunt ullamco est <br />
            sit aliqua dolor do amet sint. Velit officia consequatduis <br />
            enim velit mollit Exercitation.</p>
        </div>
    </div>
  )
}

export default IntroSection;