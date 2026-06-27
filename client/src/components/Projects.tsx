import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'CyberShield AI',
    description: 'AI Cyber Attack Simulation Platform',
    features: ['Virtual Network', 'Attack Simulation', 'Risk Score', 'Security Dashboard'],
    tags: ['AI', 'Security', 'Python'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Smart Health Management System',
    description: 'Comprehensive healthcare platform with patient management',
    features: ['MERN Stack', 'Authentication', 'Patient Dashboard', 'Medical Records'],
    tags: ['MERN', 'Healthcare', 'Full Stack'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Student Stress Prediction',
    description: 'Machine learning model for predicting student stress levels',
    features: ['Machine Learning', 'FastAPI', 'Scikit Learn', '85% Accuracy'],
    tags: ['ML', 'Python', 'FastAPI'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Resume Analyzer',
    description: 'Intelligent resume analysis and ranking system',
    features: ['Python', 'Flask', 'NLP', 'TF-IDF'],
    tags: ['NLP', 'Python', 'AI'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export function Projects() {
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
      id="projects"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass-card p-8 group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 gradient-text">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground/70 mb-3">
                    Key Features:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-background rounded-full text-xs font-medium text-neon-purple border border-neon-purple/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neon-purple/10 rounded-full text-xs font-medium text-neon-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demoUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-lg font-semibold text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-neon-blue text-neon-blue rounded-lg font-semibold text-sm hover:bg-neon-blue/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
