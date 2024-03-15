import React from 'react'
import styles from './Contact.module.css'
import { getImageURL } from '../../utils'

export const Contact = () => {
  return <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let's Connect!!!!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}><img src={getImageURL("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:akatigi22@gmail.com">akatigi22@gmail.com</a>
            </li>

            <li className={styles.link}><img src={getImageURL("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
            <a href="https://www.linkedin.com/in/aadarsh-katigi-6231a11b5/">LinkedIn/Aadarsh Katigi</a>
            </li>

            <li className={styles.link}><img src={getImageURL("contact/githubIcon.png")} alt="GitHub Icon" />
            <a href="https://github.com/Adarxhhhh">GitHub/Adarxhhhh</a>
            </li>
        </ul>
  </footer>
}
