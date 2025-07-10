import React from 'react';
import styles from './projectsStyles.module.css';

import fitLift from '../../assets/fitlift.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import viberr from '../../assets/viberr.png';

import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>

      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Viberr"
          p="Streaming App" // Changed to short description
        />

        <ProjectCard
          src={freshBurger}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Fresh Burger"
          p="Restaurant Shop" // Changed to short description
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