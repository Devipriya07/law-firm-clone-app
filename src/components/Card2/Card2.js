import React from 'react';
import styles from "./Card2.module.css"

function Card2({name, image}) {  //What says our happy Clients card // will be inserted in clients component
  return (
    <div className={styles.card2Wrapper}>
        <div>
              <img width={75} src={image} alt={name} />
        </div>
        <h3 className={styles.card2Name}>{name}</h3>
        <h5 className={styles.card2Position}>Ceo of Hunt</h5>
        <p className={styles.card2Para}>
              Amet minim mollit non deserunt ullamco est <br />
              sit aliqua dolor do amet sint. Velit officia <br />
              consequatduis enim velit mollit Exer. sit <br />
              aliqua dolor do amet sint. Velit officia
        </p>
    </div>
  )
}

export default Card2;