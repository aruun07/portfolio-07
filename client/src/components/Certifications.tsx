import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const certifications = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Professional Certification',
    date: '2024',
  },
  {
    title: 'Machine Learning Fundamentals',
    issuer: 'Advanced Course',
    date: '2024',
  },
  {
    title: 'Cloud Architecture & DevOps',
    issuer: 'Professional Certification',
    date: '2023',
  },
  {
    title: 'Advanced Python Programming',
    issuer: 'Professional Certification',
    date: '2023',
  },
];

export function Certifications() {
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
      id="certifications"
      ref={ref}
      className="relative py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="glass-card p-8 flex items-start gap-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="p-4 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-lg flex-shrink-0"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Award className="w-6 h-6 text-neon-purple" />
              </motion.div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-sm text-neon-purple font-semibold">
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
