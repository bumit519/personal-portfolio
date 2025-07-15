import React from 'react';
import styles from './projectsStyles.module.css';

import aiResumeBuilder from '../../assets/ai resume builder.png';
import fitLift from '../../assets/fitlift.png';
import hipsster from '../../assets/hipsster.png';
import portfolioThumbnail from '../../assets/portfolio thumbnail.png';

import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={`${styles.heading} ${styles.gradientText} ${styles.fadeIn}`}>Featured Projects</h1>
      <p className={`${styles.description} ${styles.fadeIn}`}
         style={{ animationDelay: '0.2s' }}>
        A selection of my favorite work, blending modern web technologies and thoughtful design. Each project showcases a focus on clean UI, performance, and delightful user experience.
      </p>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={portfolioThumbnail}
          liveLink="https://personal-portfolio-theta-ivory.vercel.app/"
          repoLink="https://github.com/bumit519/personal-portfolio"
          h3="Portfolio"
          p="Personal Portfolio" // Updated description
        />

        <ProjectCard
          src={aiResumeBuilder}
          liveLink="https://ai-resume-builder-demo.vercel.app/"
          repoLink="https://github.com/bumit519/ai-resume-builder"
          h3="AI Resume Builder"
          p="AI-powered resume creation tool" // Updated description
        />

        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop" // Changed to short description
        />

        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App" // Changed to short description
        />
      </div>
    </section>
  );
};

export default Projects;