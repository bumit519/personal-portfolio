import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          &copy; 2025 Sumit Chauhan. All rights reserved.
        </p>
        
        <div className={styles.footerLinks}>
          <a href="#hero" className={styles.footerLink}>Home</a>
          <a href="#projects" className={styles.footerLink}>Projects</a>
          <a href="#skills" className={styles.footerLink}>Skills</a>
          <a href="#contact" className={styles.footerLink}>Contact</a>
        </div>
        
        <div className={styles.socialLinks}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Linkedin size={20} />
          </a>
          <a href="mailto:sumit@example.com" className={styles.socialLink}>
            <Mail size={20} />
          </a>
          <a href="https://portfolio.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;