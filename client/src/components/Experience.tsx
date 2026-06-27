import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    title: 'Python Web Developer Intern',
    company: 'Tech Company',
    period: '2023 - 2024',
    responsibilities: [
      'Backend Development',
      'REST APIs',
      'Testing',
      'Deployment',
      'Regression Testing',
      'CI/CD',
      'Agile Development',
    ],
    tech: ['Python', 'Flask', 'REST APIs', 'Testing'],
  },
];

export function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 bg-card"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className="glass-card p-8 relative"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-neon-purple px-4 py-2 bg-neon-purple/10 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground/70 mb-3">
                  Responsibilities:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {exp.responsibilities.map((resp) => (
                    <div
                      key={resp}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-neon-purple rounded-full" />
                      {resp}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground/70 mb-3">
                  Technologies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-background rounded-full text-xs font-medium text-neon-blue border border-neon-blue/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
