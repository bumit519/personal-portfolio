import { useEffect, useRef } from "react";
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import { useTheme } from '../../common/ThemeContext';
import styles from './StarBackgroundStyles.module.css';

export const StarBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dark' && !vantaEffect.current) {
      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x007aff,
        shininess: 50.0,
        waveHeight: 20.0,
        waveSpeed: 1.0,
        zoom: 1.0,
        backgroundColor: 0x0a0a0a
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [theme]);

  // Only render the container in dark mode
  if (theme !== 'dark') return null;

  return (
    <div ref={vantaRef} className={styles.backgroundContainer} style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1}} />
  );
};
