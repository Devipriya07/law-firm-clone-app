import React, { useState } from 'react';
import styles from "./Hero.module.css";
import {ReactComponent as MessageIcon} from "../../assets/msg icon.svg";
import heroImg from "../../assets/hero.png"


function Hero() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const getEmail = (e) => {
    e.preventDefault();
    setError(""); //It resets the error state, to clear any previous error messages.
    setEmail(e.target.value.trim())  //to trim any leading and tailing white spaces
  }

  const pushEmail = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setError("*Email cannot be empty");
      return;
    }
    alert("Email captured");
    setEmail("");
  }

  return (
    <section className={styles.heroWrapper}>
        <div className={styles.heroContent}>

            <div className={styles.contentWrapper}>
                <h1 style={{fontWeight: "450", fontSize:"60px"}}>You don't have to</h1>
                <h1>Fight them Alone.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
           </div>
            <div> <form className={styles.heroForm} onSubmit={pushEmail}>
                <MessageIcon className={styles.messageIcon} />
                <input className={styles.heroInput} type="email" placeholder='Enter your email address' onChange={getEmail} value={email} /> 
                <button className={styles.heroBtn} type='submit'>Let's Talk</button>
                <p style={{ color: 'yellow'}}> {error} </p> 
             </form>  </div>
        </div>
        <div className={styles.heroImgWrapper}>
            <img width={325} src={heroImg} alt="hero-img" />
        </div>
    </section>
  )
}

export default Hero;