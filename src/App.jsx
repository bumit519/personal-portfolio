import { useEffect } from 'react';
import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Projects from './sections/projects/projects';
import Skills from './sections/Skills/Skills';

function App() {
  useEffect(() => {
    console.log('App component mounted');
    console.log('Theme:', document.body.getAttribute('data-theme'));
    console.log('Background color:', getComputedStyle(document.body).backgroundColor);
  }, []);

  return (
    <>
      <Header />
      {/* Temporarily disabled StarBackground to debug */}
      {/* <StarBackground /> */}
      <main style={{ 
        position: 'relative', 
        zIndex: 1, 
        minHeight: '100vh', 
        background: 'var(--bg-color)',
        paddingTop: '80px' // Add space for fixed header
      }}>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
