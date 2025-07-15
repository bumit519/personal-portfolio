import { useEffect } from 'react';
import './App.css';
import { useTheme } from './common/ThemeContext';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Projects from './sections/projects/projects';
import Skills from './sections/Skills/Skills';
import { StarBackground } from './sections/starbackground/StarBackground';

function App() {
  const { theme } = useTheme();
  useEffect(() => {
    console.log('App component mounted');
    console.log('Theme:', document.body.getAttribute('data-theme'));
    console.log('Background color:', getComputedStyle(document.body).backgroundColor);
  }, []);

  return (
    <>
      <Header />
      {theme === 'dark' && <StarBackground />}
      <main style={{ 
        position: 'relative', 
        zIndex: 1, 
        minHeight: '100vh', 
        paddingTop: '80px' // Add space for fixed header
      }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
