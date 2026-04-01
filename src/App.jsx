import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Training from './components/Training';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Contact from './components/Contact';
import './App.css';

function App() {
  // Smooth scroll logic can be handled natively by CSS, but keeping App simple.
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Training />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <footer className="glass" style={{ padding: '30px 20px', textAlign: 'center', marginTop: '50px', borderRadius: '0', borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>© {new Date().getFullYear()} Mohit Godara. All rights reserved.</p>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '0.85rem', color: 'var(--text-secondary)', opacity: 0.6, lineHeight: '1.5' }}>
          <p>
            Welcome to the official <strong>Mohit Godara portfolio</strong>. This interactive space showcases my technical journey, professional experience, and creative projects. Here, you'll find a growing collection of work that reflects my passion for innovative web development and design. Feel free to explore my skills and connect with me for future collaborations.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
