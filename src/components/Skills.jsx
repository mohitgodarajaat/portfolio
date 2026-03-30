import { motion } from 'framer-motion';
import { FaJava, FaPython, FaNetworkWired, FaUserSecret, FaWindows, FaDesktop } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'Java Programming', icon: <FaJava size={40} color="#f89820"/>, level: 'Intermediate' },
    { name: 'Python Basics', icon: <FaPython size={40} color="#ffde57"/>, level: 'Intermediate' },
    { name: 'Ethical Hacking', icon: <FaUserSecret size={40} color="#00f0ff"/>, level: 'Working Knowledge' },
    { name: 'Computer & Networking Basics', icon: <FaNetworkWired size={40} color="#7000ff"/>, level: 'Strong' },
    { name: 'MS Office Suite (Word, Excel, PPT)', icon: <FaWindows size={40} color="#00a4ef"/>, level: 'Advanced' },
    { name: 'Coding Logic & Programming', icon: <FaDesktop size={40} color="#fff"/>, level: 'Strong' }
  ];

  return (
    <section id="skills" className="section container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-gradient" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: '2rem' }}
            >
              <div style={{ marginBottom: '1rem' }}>{skill.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{skill.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
