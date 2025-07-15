import React from 'react';
import styles from './ProjectCard.module.css';
import utilities from './utilities.module.css';

function ProjectCard({ src, link, liveLink, repoLink, h3, p }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} glassCard`}>
        <div className={styles.content}>
          <img className={styles.image} src={src} alt={`${h3} logo`} />
          <div className={styles.text}>
            <h3 className={`${styles.title} ${utilities.gradientText}`}>{h3}</h3>
            <p className={styles.description}>{p}</p>
            <div className={styles.links}>
              {liveLink && (
                <a 
                  href={liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={utilities.projectLinkBtn}
                >
                  Live Demo
                </a>
              )}
              {repoLink && (
                <a 
                  href={repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={utilities.projectLinkBtn}
                >
                  Repository
                </a>
              )}
              {!liveLink && !repoLink && link && (
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.link}
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
