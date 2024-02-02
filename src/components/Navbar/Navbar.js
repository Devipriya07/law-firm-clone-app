import React from 'react';
import Logo from '../Logo/Logo';
import Navlist from '../Navlist/Navlist';
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.navWrapper}>
        <div>
            <Logo />
        </div>
        <div>
          <Navlist />
        </div>
        <button className={styles.contactBtn}>
          Contact Now
        </button>
    </nav>
  )
}

export default Navbar;