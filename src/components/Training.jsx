import { motion } from 'framer-motion';

const Training = () => {
  const trainingData = [
    {
      period: 'July 2024 - September 2024',
      company: 'Novem Controls, Chandigarh',
      subject: 'Java Language',
      description: 'Learned core Java programming concepts and implemented real-world applications.'
    },
    {
      period: 'May 2025 - June 2025',
      company: 'Acent India Technoart Pvt. Ltd., Gurugram',
      subject: 'Python Language',
      description: 'Explored Python basics, scripting, and development logic.'
    },
    {
      period: 'June 2025 - August 2025',
      company: 'HLEI(OPC) Private Limited, Bhattu mandi (Ftb)',
      subject: 'Ethical Hacking',
      description: 'Got hands-on experience with cyber security fundamentals, network analysis, and ethical hacking protocols.'
    }
  ];

  return (
    <section id="training" className="section container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-gradient" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Training & Experience</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {trainingData.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card"
              style={{ borderTop: '4px solid var(--accent-primary)' }}
            >
              <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{training.subject}</h3>
              <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{training.period}</p>
              <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontStyle: 'italic' }}>{training.company}</h4>
              <p style={{ lineHeight: '1.6' }}>{training.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Training;
