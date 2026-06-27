import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    title: 'Fast Learner',
    description: 'Quickly adapt to new technologies and frameworks',
  },
  {
    title: 'Clean Code',
    description: 'Write maintainable, well-documented code',
  },
  {
    title: 'AI Productivity',
    description: 'Leverage AI tools for efficient development',
  },
  {
    title: 'Team Collaboration',
    description: 'Work effectively in agile teams',
  },
  {
    title: 'Testing Experience',
    description: 'Comprehensive QA and testing expertise',
  },
  {
    title: 'Scalable Development',
    description: 'Build systems that grow with your needs',
  },
  {
    title: 'Modern Tech Stack',
    description: 'Expert in latest frameworks and tools',
  },
  {
    title: 'Problem Solver',
    description: 'Creative solutions to complex challenges',
  },
];

export function WhyHireMe() {
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
      id="why-hire"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Hire Me?</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="glass-card p-6 flex flex-col items-start"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <CheckCircle className="w-8 h-8 text-neon-purple mb-4" />
              <h3 className="text-lg font-bold mb-2 text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
