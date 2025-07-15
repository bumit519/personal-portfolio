import { Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../common/ThemeContext';
import utilities from '../../common/utilities.module.css';
import styles from './HeaderStyles.module.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} glassCard ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2 className="gradientText" style={{cursor: 'pointer'}} onClick={() => window.dispatchEvent(new Event('toggle-avatar'))}>
            Sumit Chauhan
          </h2>
        </div>

        <nav ref={navRef} className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li><button className={utilities.navBtn} onClick={() => scrollToSection('hero')}>Home</button></li>
            <li><button className={utilities.navBtn} onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button className={utilities.navBtn} onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button className={utilities.navBtn} onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button 
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 