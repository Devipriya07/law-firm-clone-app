import React from 'react';
import styles from "./Card3.module.css"

function Card3({name, image, cases}) {    //our team card, inserted later in Team component
  return (
    <div className={styles.card3Wrapper}>
        <div>
            <img src={image} alt={image} />
        </div>
        <div className={styles.card3Data}>
            <h5>{name}</h5>
            <p>{`${cases} Cases`}</p>
        </div>
    </div>
  )
}

export default Card3;