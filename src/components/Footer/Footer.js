import React from 'react';
import styles from "./Footer.module.css";
import Logo from '../Logo/Logo';
import Navlist from '../Navlist/Navlist';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <section>
        <div>
          <Logo />  
        </div>
        <Navlist />
        <ul className={styles.socialListWrapper}>
        <li>
            <a href="https://www.linkedin.com/in/devipriya-s-308559237//" rel='noreferrer' target='_blank'>
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/i/flow/login" rel='noreferrer' target='_blank'>
              <TwitterIcon />    
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" rel='noreferrer' target="_blank">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" rel='noreferrer' target="_blank">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </section>
      <div>
        <span>© 2024 Tanzeel. All right reserved.</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </footer>
  )
}

export default Footer;

// rel="noreferrer" (instructs the browser not to include the Referer header when making the request. 
//                     when opening external links in a new window or tab, as it helps protect user privacy and 
//                     avoids potentially leaking sensitive information about the user's browsing history.

// The noreferrer keyword for the rel attribute of the <a>, <area>, and <form> elements instructs the browser, when 
// navigating to the target resource, to omit the Referer header and 
// otherwise leak no referrer information — and additionally to behave as if the noopener keyword were 
// also specified.