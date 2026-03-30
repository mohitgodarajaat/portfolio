import { motion } from 'framer-motion';

const Awards = () => {
  const awards = [
    { title: 'Java Programming', subtitle: 'Certified – Core', highlight: 'var(--accent-primary)' },
    { title: 'Python Programming', subtitle: 'Certified – Basics', highlight: 'var(--accent-secondary)' },
    { title: 'Ethical Hacking and Cyber Security', subtitle: 'Professional Training', highlight: '#ff0055' }
  ];

  return (
    <section id="awards" className="section container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-gradient" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Certifications & Training</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: `6px solid ${award.highlight}` }}
            >
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{award.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{award.subtitle}</p>
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: award.highlight, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: `0 0 15px ${award.highlight}` }}>
                <span style={{ color: '#fff', fontWeight: 'bold' }}>✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
