import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.documentElement.classList.add('light-mode');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isLightMode;
    setIsLightMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled glass' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/profile.png" alt="Mohit Logo" className="nav-logo-img" />
        </div>
        <ul className="nav-links">
          <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
          <li><Link to="training" smooth={true} duration={500}>Training</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
              {isLightMode ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
