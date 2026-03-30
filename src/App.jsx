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
      <footer className="glass" style={{ padding: '20px', textAlign: 'center', marginTop: '50px', borderRadius: '0', borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
        <p style={{ color: 'var(--text-secondary)' }}>© {new Date().getFullYear()} Mohit Godara. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
