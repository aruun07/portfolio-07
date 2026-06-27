import { motion } from 'framer-motion';
import { Database, Layers, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'End-to-end web application development with modern tech stack',
  },
  {
    icon: Zap,
    title: 'Backend APIs',
    description: 'Scalable REST APIs and microservices architecture',
  },
  {
    icon: Layers,
    title: 'AI Integration',
    description: 'Integrate AI/ML models and LLM APIs into applications',
  },
  {
    icon: Database,
    title: 'Python Development',
    description: 'Custom Python solutions for data processing and automation',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Build automation scripts and workflows',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimize database schemas and queries for performance',
  },
];

export function Services() {
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
      id="services"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="glass-card p-8 flex flex-col group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="mb-6 p-4 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-lg w-fit"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="w-8 h-8 text-neon-purple" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 gradient-text">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                <motion.div
                  className="mt-6 pt-6 border-t border-neon-purple/20"
                  whileHover={{ x: 5 }}
                >
                  <a
                    href="#contact"
                    className="text-sm font-semibold text-neon-purple hover:text-neon-blue transition-colors"
                  >
                    Learn more →
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
