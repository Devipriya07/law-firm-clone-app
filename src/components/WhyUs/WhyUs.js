import React from 'react';
import Card1 from '../Card1/Card1';
import styles from "./WhyUs.module.css"

function WhyUs() {     //card1 cpmponent is imported here
  return (
    <div className={styles.whyUsWrapper}>
        <h1>Why Choose us ?</h1>
        <div className={styles.cards1Wrapper}>
            <Card1 heading="98% Success Rate" />
            <Card1 heading="100% Success Rate" />
            <Card1 heading="100% Success Rate" />
        </div>
    </div>
  )
}

export default WhyUs;