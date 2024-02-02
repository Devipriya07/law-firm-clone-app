import React, { useState } from 'react';
import styles from "./Subscription.module.css"

function Subscription() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const getEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    if(name !== "" && email !== "") {
      alert("Your Name & Email Captured");
      setName("");
      setEmail("");
    } else {
      alert("Enter name or email");
    }
    
  }

  
  return (
    <section className={styles.subscriptionWrapper}>
        <h1>Subscribe Our Newsletter</h1>
        <form className={styles.subscriptionForm} onSubmit={submit}>
            <input className={styles.subscriptionInput} style={{borderRadius: "7px 0px 0px 7px"}} type="text" placeholder='Name' onChange={getName} value={name} />
            <input className={styles.subscriptionInput} type="name" placeholder='Enter your Email' onChange={getEmail} value={email} />
            <button type='submit' className={styles.subscriptionButton}>Send</button>
        </form>
    </section>
  )
}

export default Subscription;