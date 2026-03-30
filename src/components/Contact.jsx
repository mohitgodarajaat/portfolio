import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaBlogger } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section container" style={{ marginBottom: '100px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-gradient" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Get In Touch</h2>
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <motion.div whileHover={{ scale: 1.05 }} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)' }}>
              <FaPhone size={30} color="var(--accent-primary)" style={{ marginBottom: '1rem' }} />
              <h4>Phone</h4>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>+91 9813800724</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)' }}>
              <FaEnvelope size={30} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
              <h4>Email</h4>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', wordBreak: 'break-all' }}>officialgodaramohit@gmail.com</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)' }}>
              <FaMapMarkerAlt size={30} color="#ff0055" style={{ marginBottom: '1rem' }} />
              <h4>Address</h4>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>V.P.O Nangthala, Hisar, 125047<br/>Haryana, India</p>
            </motion.div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Connect with me on social platforms.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              <a href="https://github.com/mohitgodarajaat" target="_blank" rel="noopener noreferrer" className="glass" style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', color: 'var(--text-primary)', textDecoration: 'none' }} title="GitHub">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mohit-godara-jaat-a727a837a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="glass" style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', color: 'var(--text-primary)', textDecoration: 'none' }} title="LinkedIn">
                <FaLinkedin size={24} />
              </a>
              <a href="https://godaramohit.blogspot.com" target="_blank" rel="noopener noreferrer" className="glass" style={{ width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', color: 'var(--text-primary)', textDecoration: 'none' }} title="Blogger">
                <FaBlogger size={24} />
              </a>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Ready to collaborate? Reach out via email or phone!</p>
            <a href="mailto:officialgodaramohit@gmail.com" className="btn-primary" style={{ marginTop: '1.5rem' }}>Send an Email</a>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
