import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';
import styles from './SkillsStyles.module.css';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  const frontendSkills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js'
  ];

  const backendSkills = [
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'
  ];

  const toolsSkills = [
    'Git', 'Docker', 'AWS', 'Figma', 'Jest'
  ];

  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills & Technologies</h1>
      
      <div className={styles.skillList}>
        {frontendSkills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <img src={checkMarkIcon} alt="Checkmark" className={styles.skillIcon} />
            <p className={styles.skillName}>{skill}</p>
          </div>
        ))}
      </div>

      <div className={styles.divider}></div>

      <div className={styles.skillList}>
        {backendSkills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <img src={checkMarkIcon} alt="Checkmark" className={styles.skillIcon} />
            <p className={styles.skillName}>{skill}</p>
          </div>
        ))}
      </div>

      <div className={styles.divider}></div>

      <div className={styles.skillList}>
        {toolsSkills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <img src={checkMarkIcon} alt="Checkmark" className={styles.skillIcon} />
            <p className={styles.skillName}>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;