import React from 'react'
import { getImageURL } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Aadarsh</h1>
        <p className={styles.description}>I'm a Software Engineer currently pursuing my Master's in Computer Science from UMass Boston. 
          I have 2+ years of experience working in Web Dev and Machine Learning. Please feel free to reach out to learn more.</p>
        <a href="mailto:akatigi22@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageURL("hero/Aadarsh.png")} alt="hero Image of me" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
}
