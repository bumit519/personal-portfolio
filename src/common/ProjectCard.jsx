import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <div className={styles.wrapper}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
        <div className={styles.content}>
          <img className={styles.image} src={src} alt={`${h3} logo`} />
          <div className={styles.text}>
            <h3 className={styles.title}>{h3}</h3>
            <p className={styles.description}>{p}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
