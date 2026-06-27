import { motion } from 'framer-motion';
import { Award, Code, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const achievements = [
  {
    icon: Award,
    title: 'Runner Up Hackathon',
    description: 'Achieved runner-up position in a competitive hackathon event',
  },
  {
    icon: Code,
    title: '150+ DSA Problems',
    description: 'Solved over 150 data structures and algorithms problems',
  },
  {
    icon: Zap,
    title: 'Production Projects',
    description: 'Shipped 4+ production-grade projects to real users',
  },
  {
    icon: Code,
    title: 'AI Developer',
    description: 'Integrated AI/ML solutions into multiple applications',
  },
  {
    icon: Award,
    title: 'QA Experience',
    description: 'Extensive testing and quality assurance expertise',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quickly adapt to new technologies and frameworks',
  },
];

export function Achievements() {
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
      id="achievements"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                className="glass-card p-8 flex flex-col items-center text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="mb-6 p-4 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="w-8 h-8 text-neon-purple" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 gradient-text">
                  {achievement.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
