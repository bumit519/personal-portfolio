import { useEffect, useRef, useState } from "react";
import { useTheme } from '../../common/ThemeContext';
import styles from './StarBackgroundStyles.module.css';

export const StarBackground = () => {
  const [particles, setParticles] = useState([]);
  const [connections, setConnections] = useState([]);
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const generateParticles = () => {
      const count = Math.min(8, Math.floor((window.innerWidth * window.innerHeight) / 120000));
      const particleArray = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
      }));
      setParticles(particleArray);
    };

    const updateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.vx;
        let newY = particle.y + particle.vy;

        // Bounce off edges
        if (newX <= 0 || newX >= window.innerWidth) {
          particle.vx = -particle.vx;
          newX = particle.x + particle.vx;
        }
        if (newY <= 0 || newY >= window.innerHeight) {
          particle.vy = -particle.vy;
          newY = particle.y + particle.vy;
        }

        return {
          ...particle,
          x: newX,
          y: newY,
        };
      }));
    };

    const generateConnections = () => {
      const newConnections = [];
      const maxDistance = 150;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            newConnections.push({
              from: particles[i],
              to: particles[j],
              opacity: 1 - (distance / maxDistance),
            });
          }
        }
      }
      setConnections(newConnections);
    };

    generateParticles();
    const interval = setInterval(updateParticles, 100);
    const connectionInterval = setInterval(generateConnections, 200);

    const handleResize = () => {
      generateParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      clearInterval(connectionInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const generateConnections = () => {
      const newConnections = [];
      const maxDistance = 150;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            newConnections.push({
              from: particles[i],
              to: particles[j],
              opacity: 1 - (distance / maxDistance),
            });
          }
        }
      }
      setConnections(newConnections);
    };

    generateConnections();
  }, [particles]);

  // Don't return null, just use a default theme
  const currentTheme = theme || 'light';

  return (
    <div className={styles.backgroundContainer}>
      <svg className={styles.svg} width="100%" height="100%">
        <defs>
          <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={currentTheme === 'light' ? '#007AFF' : '#007AFF'} stopOpacity="0.8" />
            <stop offset="100%" stopColor={currentTheme === 'light' ? '#007AFF' : '#007AFF'} stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Connection lines */}
        {connections.map((connection, index) => (
          <line
            key={`connection-${index}`}
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke={currentTheme === 'light' ? '#007AFF' : '#007AFF'}
            strokeOpacity={connection.opacity * 0.3}
            strokeWidth="1"
            className={styles.connection}
          />
        ))}
        
        {/* Particles */}
        {particles.map((particle) => (
          <circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill="url(#particleGradient)"
            opacity={particle.opacity}
            className={styles.particle}
          />
        ))}
      </svg>
      
      {/* Subtle gradient overlay */}
      <div className={styles.gradientOverlay} />
    </div>
  );
};
