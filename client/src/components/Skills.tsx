import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C', 'C++'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'Tailwind', 'Responsive Design'],
  },
  {
    title: 'Backend',
    skills: ['Node', 'Express', 'Flask', 'FastAPI', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'AI & ML',
    skills: ['Claude', 'Cursor', 'GitHub Copilot', 'OpenAI', 'NLP', 'TF-IDF', 'Scikit Learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Testing & Tools',
    skills: ['Manual Testing', 'Regression Testing', 'Bug Tracking', 'Postman', 'Git', 'GitHub', 'Docker', 'Agile', 'VS Code', 'Linux'],
  },
];

export function Skills() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 bg-card"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground border border-neon-purple/30 hover:border-neon-purple/60 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 1)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
