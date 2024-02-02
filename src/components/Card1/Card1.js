import React from 'react';
import styles from "./Card1.module.css";
import giftIcon from "../../assets/gift-icon.png"

function Card1({heading}) {   //gift icon 
  return (
    <div className={styles.card1Wrapper}>
          <div className={styles.card1ImgWrapper}>
                <img width={62} src={giftIcon} alt="gift_icon" />
          </div>
          <h5 className={styles.card1Heading}>{heading}</h5>
          <p className={styles.card1Para}>
                Amet minim mollit non deserunt ullamco est <br />
                sit aliqua dolor do amet sint. Velit officia <br />
                consequatduis enim velit mollit Exer.
          </p>
          <button className={styles.card1Btn}>Read More</button>
    </div>
  )
}

export default Card1;