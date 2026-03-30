import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="section hero-container">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Mohit</h1>
          <h2 className="hero-role heading-gradient">B.Tech IT Student & Tech Enthusiast</h2>
          <p className="hero-description">
            Passionate about coding logic, cybersecurity, and networking. Building a secure and logical foundation for the digital world.
          </p>
          <div className="hero-buttons">
            <Link to="contact" smooth={true} duration={500} className="btn-primary">Hire Me</Link>
            <Link to="about" smooth={true} duration={500} className="btn-outline">Explore My Journey</Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-visual"
        >
          <div className="glow-orb"></div>
          <div className="glass-card portrait-container">
            <img src="/profile.png" alt="Mohit Godara" className="hero-profile-img" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
