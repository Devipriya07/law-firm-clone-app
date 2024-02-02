import React from 'react';
import styles from "./PracticeArea.module.css";
import practiceImg1 from "../../assets/practice-img1.png";
import practiceImg2 from "../../assets/practice-img2.png";
import practiceImg3 from "../../assets/practice-img3.png";
import practiceImg4 from "../../assets/practice-img4.png";
import practiceImg5 from "../../assets/practice-img5.png";
import practiceImg6 from "../../assets/practice-img6.png";

function PracticeArea() {
  return (
    <div id='practice-areas' className={styles.practiceSectionWrapper}>
            <h1>Area of Practice</h1>
                <div>
                        <div className={styles.imgContainer}>
                            <img src={practiceImg1} alt="img-1" />
                            <h5>Business Law</h5>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={practiceImg2} alt="img-2" />
                            <h5>partnership law</h5>
                        </div>
                </div>
                <div>
                        <div className={styles.imgContainer}>
                            <img src={practiceImg3} alt="img-3" />
                            <h5>real state law</h5>
                        </div >
                        <div className={styles.imgContainer}>
                            <img src={practiceImg4} alt="img-4" />
                        <h5>business law</h5>
                        </div>
                </div>
                <div>
                        <div className={styles.imgContainer}>
                            <img src={practiceImg5} alt="img-5" />
                            <h5>landlord disputes</h5>
                        </div>
                        <div className={styles.imgContainer}>
                            <img src={practiceImg6} alt="img-6" />
                            <h5>elder abuse</h5>
                        </div>
                </div>
    </div>
  )
}

export default PracticeArea;