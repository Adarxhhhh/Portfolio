import React from 'react';
import { getImageURL } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>Know Me :</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/mirror_removebg_modified.png")}
          alt="Aadarsh"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>Full Stack Developer experienced in building responsive and scalable Web Applications.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="server" />
            <div className={styles.aboutItemText}>
              <h3>ML Aficionado</h3>
              <p>Machine Learning enthusiast interested in building and deploying industry-grade Machine Learning/Deep Learning Algorithms.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/uiIcon.png")} alt="UI/UX" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Developer</h3>
              <p>Making Technology and Applications not suck to use.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
