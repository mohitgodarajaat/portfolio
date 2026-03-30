import { motion } from 'framer-motion';
import './Timeline.css';

const Education = () => {
  const educationData = [
    {
      year: '2022 - 2023',
      degree: '10th Standard',
      institution: 'Govt. Senior Secondary School (Nangthala)',
      score: '84.2%',
    },
    {
      year: '2023 - 2026',
      degree: 'Diploma',
      institution: 'Govt. Polytechnic, Dhangar (Fatehabad)',
      score: '72%',
    },
    {
      year: 'Present',
      degree: 'B.Tech (IT Branch)',
      institution: 'GJU University',
      score: 'Pursuing',
    }
  ];

  return (
    <section id="education" className="section container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="heading-gradient" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Education</h2>
        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content glass-card hover-glow">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.degree}</h3>
                <h4 style={{ color: 'var(--text-secondary)', margin: '0.5rem 0' }}>{item.institution}</h4>
                <p className="highlight-score">Score: {item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
