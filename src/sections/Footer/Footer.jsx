import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import utilities from '../../common/utilities.module.css';
import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={`${styles.container} glassCard`}>
      <div className={styles.footerContent}>
        <p className={`gradientText ${styles.footerText}`}>
          &copy; 2025 Sumit Chauhan. All rights reserved.
        </p>
        
        <div className={styles.footerLinks}>
          <a href="#hero" className={`${utilities.navBtn} ${styles.footerLink}`}>Home</a>
          <a href="#projects" className={`${utilities.navBtn} ${styles.footerLink}`}>Projects</a>
          <a href="#skills" className={`${utilities.navBtn} ${styles.footerLink}`}>Skills</a>
          <a href="#contact" className={`${utilities.navBtn} ${styles.footerLink}`}>Contact</a>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={`glassCard ${styles.socialLink}`}>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={`glassCard ${styles.socialLink}`}>
            <Linkedin size={20} />
          </a>
          <a href="mailto:sumit@example.com" className={`glassCard ${styles.socialLink}`}>
            <Mail size={20} />
          </a>
          <a href="https://portfolio.com" target="_blank" rel="noopener noreferrer" className={`glassCard ${styles.socialLink}`}>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;