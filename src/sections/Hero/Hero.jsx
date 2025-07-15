import React, { useEffect, useState } from 'react';
import avatarImg from '../../assets/avatar.png';
import avatar2Img from '../../assets/avatar2.png';
import styles from './Herostyles.module.css';

// Social media images for light theme
import githubLight from '../../assets/github-light.png';
import instagramLight from '../../assets/instagram-light.png';
import linkedinLight from '../../assets/linkedin-light.png';

import { Github, Instagram, Linkedin, Moon, Sun } from 'lucide-react';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

const titles = [
  'Full Stack Developer',
  'Frontend Engineer',
  'React Enthusiast',
  'UI/UX Explorer'
];

const Hero = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showHoverHint, setShowHoverHint] = useState(true); // Start as true
  const [lastNameIndex, setLastNameIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isAvatarToggled, setIsAvatarToggled] = useState(false); // NEW
  const lastName = 'Chauhan';

  useEffect(() => {
    const handleToggleAvatar = () => setIsAvatarToggled((prev) => !prev);
    window.addEventListener('toggle-avatar', handleToggleAvatar);
    return () => window.removeEventListener('toggle-avatar', handleToggleAvatar);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Preload both images for smooth transitions
  useEffect(() => {
    const preloadImages = () => {
      const img1 = new Image();
      const img2 = new Image();
      img1.src = avatarImg;
      img2.src = avatar2Img;
      
      img1.onload = () => setIsImageLoaded(true);
      img2.onload = () => setIsImageLoaded(true);
    };
    
    preloadImages();
  }, []);

  // Show hover hint for 4 seconds then hide it
  useEffect(() => {
    // Force show the hint initially
    setShowHoverHint(true);
    
    const timer = setTimeout(() => {
      setShowHoverHint(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timeout;
    if (!isErasing && lastNameIndex < lastName.length) {
      timeout = setTimeout(() => {
        setLastNameIndex(lastNameIndex + 1);
      }, 200);
    } else if (!isErasing && lastNameIndex === lastName.length) {
      timeout = setTimeout(() => {
        setIsErasing(true);
      }, 1000); // Pause before erasing
    } else if (isErasing && lastNameIndex > 0) {
      timeout = setTimeout(() => {
        setLastNameIndex(lastNameIndex - 1);
      }, 100);
    } else if (isErasing && lastNameIndex === 0) {
      timeout = setTimeout(() => {
        setIsErasing(false);
      }, 500); // Pause before typing again
    }
    return () => clearTimeout(timeout);
  }, [lastNameIndex, isErasing]);

  // Single theme toggle component
  const ThemeIconComponent = (props) => (
    theme === 'light' 
      ? <Moon {...props} color="black" />
      : <Sun {...props} color="yellow" />
  );

  // Creative social icons - images for light theme, icons for dark theme
  const GithubIconComponent = (props) => (
    theme === 'light' 
      ? <img src={githubLight} alt="GitHub" {...props} className={styles.socialImage} />
      : <Github {...props} color="white" size={28} />
  );
  const LinkedinIconComponent = (props) => (
    theme === 'light' 
      ? <img src={linkedinLight} alt="LinkedIn" {...props} className={styles.socialImage} />
      : <Linkedin {...props} color="white" size={28} />
  );
  const InstagramIconComponent = (props) => (
    theme === 'light' 
      ? <img src={instagramLight} alt="Instagram" {...props} className={styles.socialImage} />
      : <Instagram {...props} color="white" size={28} />
  );

  const handleAvatarHover = () => {
    setIsAvatarHovered(true);
    setShowHoverHint(false); // Hide hint immediately when hovering
  };

  const handleAvatarLeave = () => {
    setIsAvatarHovered(false);
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
          className={`${styles.hero} ${isImageLoaded ? styles.loaded : ''}`}
          src={(isAvatarHovered || isAvatarToggled) ? avatarImg : avatar2Img}
          alt="Profile picture of Sumit"
          onMouseEnter={handleAvatarHover}
          onMouseLeave={handleAvatarLeave}
          style={{
            opacity: isImageLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        {/* Professional hover indicator */}
        <div className={`${styles.hoverIndicator} ${isAvatarHovered ? styles.active : ''}`}>
          <span>👋</span>
        </div>
        {/* Subtle hover hint */}
        <div className={`${styles.hoverHint} ${showHoverHint ? styles.visible : ''}`}>
          <span>Hover me</span>
        </div>
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>
          <span className={styles.firstName}>Sumit</span>
          <br />
          <span className={styles.lastName}>{lastName.slice(0, lastNameIndex)}</span>
        </h1>
        <h2 className={styles.typing}>{titles[currentTitle]}</h2>

        <span className={styles.socials}>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <GithubIconComponent className={styles.socialIcon} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedinIconComponent className={styles.socialIcon} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIconComponent className={styles.socialIcon} />
          </a>
        </span>

        <p className={styles.description}>
          Passionate frontend engineer specializing in crafting high-performance, accessible, and visually stunning React applications. Adept at transforming ideas into seamless user experiences, with a strong focus on clean architecture, scalability, and design systems.
        </p>

        <a href={CV} download>
          <button className={styles.resumeBtn}>Resume</button>
        </a>
      </div>
      <a href="#about" className={styles.scrollDown} aria-label="Scroll to About section" style={{ pointerEvents: 'auto' }}>
        <span>Scroll Down</span>
        <div className={styles.arrow}></div>
      </a>
    </section>
  );
};

export default Hero;