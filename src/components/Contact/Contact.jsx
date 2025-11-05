import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
    <li className={styles.link}>
  <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishekpatoles13@gmail.com&su=Let's%20Work%20Together&body=Hi%20Abhishek%2C%0AI%20came%20across%20your%20portfolio..."
    target="_blank"
    rel="noopener noreferrer"
    className={styles.contactBtn}
  >
    abhishekpatoles13@gmail.com
  </a>
</li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
            <a 
  href="https://www.linkedin.com/in/abhishek-patole-dev" 
  target="_blank" 
  rel="noopener noreferrer"
>
  LinkedIn
</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a 
  href="https://github.com/Abhishek-patole" 
  target="_blank" 
  rel="noopener noreferrer"
>
  GitHub
</a>
        </li>
    </ul>
  </footer>
}
