import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '4+', label: 'Production Projects' },
  { value: '150+', label: 'DSA Problems' },
  { value: '1', label: 'Internship' },
  { value: '85%', label: 'ML Accuracy' },
];

export function About() {
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
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          

          {/* Right - Description */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Full Stack Developer & AI Engineer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Computer Science student passionate about building scalable applications and integrating AI-assisted development into modern workflows. With expertise in full-stack development, backend engineering, and machine learning, I create intelligent systems that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey spans from REST API development to production-grade MERN stack applications, Python backend services, and AI-powered solutions. I'm committed to writing clean, maintainable code and continuously learning emerging technologies.
              </p>
            </div>

            {/* Skills Overview */}
            <div className="grid grid-cols-2 gap-4">
              {[
                'Full Stack Development',
                'AI Integration',
                'Backend Engineering',
                'REST APIs',
                'MERN Stack',
                'Python Development',
                'Problem Solving',
                'Agile Development',
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="glass-card p-3 text-sm font-medium text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass-card p-6 text-center"
            >
              <motion.div
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


