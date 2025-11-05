import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Hero.module.css"

export const Hero = () => {
  return <section className= {styles.container} >
    <div  className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhishek</h1>
        <p className={styles.description}>
  I am committed to continuous learning and innovation, consistently seeking to expand my technical capabilities. While technology serves as my primary toolkit, it is curiosity that truly drives my growth and creativity.
</p>

<a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abhishekpatoles13@gmail.com&su=Let's%20Work%20Together&body=Hi%20Abhishek%2C%0AI%20came%20across%20your%20portfolio..."
  target="_blank"
  rel="noopener noreferrer"
  className={styles.contactBtn}
>
  Contact Me
</a>
    </div>
    <img className={styles.heroImg} src={getImageUrl("hero/hero.png")} alt='Hero image of me' />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}
