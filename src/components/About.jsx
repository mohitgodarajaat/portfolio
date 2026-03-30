import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-gradient" style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>About Me</h2>
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            I am Mohit, a passionate and dedicated student currently pursuing a B.Tech in Information Technology at GJU University. 
            With a solid foundation in programming languages like Java and Python, as well as core training in Ethical Hacking, 
            I am driven to build secure, robust, and meaningful software solutions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <div className="glass-card" style={{ padding: '1rem 2rem', border: '1px solid var(--accent-primary)' }}>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Location</h4>
              <p>Hisar, Haryana, India</p>
            </div>
            <div className="glass-card" style={{ padding: '1rem 2rem', border: '1px solid var(--accent-secondary)' }}>
              <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Core Focus</h4>
              <p>IT & Cyber Security</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
