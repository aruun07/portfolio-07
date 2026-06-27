import { motion, easeOut } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const titles = [
  'Full Stack Developer',
  'AI-Assisted Software Engineer',
  'MERN Stack Developer',
  'Python Developer',
  'Backend Engineer',
];

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText !== currentTitle) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      }, 50);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 30);
    } else if (displayedText === currentTitle && !isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (displayedText === '' && isDeleting) {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient overlay for hero section */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/10 to-background" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                ARUNANGSHU
                <br />
                <span className="gradient-text">PAUL</span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div variants={itemVariants}>
              <div className="h-12 flex items-center">
                <p className="text-xl md:text-2xl text-neon-purple font-medium">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Building intelligent systems with clean code and innovative solutions. Passionate about full-stack development, AI integration, and creating scalable backend architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="https://drive.google.com/file/d/1FXYYCuwoan2UoalnvbFsAC7t68k8Cpgv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white rounded-lg font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.button
                className="premium-button px-8 py-3 border border-neon-purple text-neon-purple rounded-lg font-semibold flex items-center gap-2 hover:bg-neon-purple/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                className="premium-button px-8 py-3 border border-neon-blue text-neon-blue rounded-lg font-semibold flex items-center gap-2 hover:bg-neon-blue/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:arunpaul7878@gmail.com'}
              >
                <Mail size={20} />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-4"
            >
              <motion.a
                href="https://github.com/aruun07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-purple transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/arunangshu-paul-b9909a2aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-blue transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.137 0 3.74 1.397 3.74 4.393v5.586zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.703 1.96-1.703 1.188 0 1.914.752 1.938 1.703 0 .946-.75 1.704-1.983 1.704zm1.946 11.019H3.39V9.681h3.893v10.771zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>

              <motion.a
                href="mailto:arunpaul7878@gmail.com"
                className="text-muted-foreground hover:text-neon-pink transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            className="relative h-96 lg:h-full min-h-96 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card p-8 w-full max-w-sm h-96 lg:h-full lg:max-w-none flex items-center justify-center relative overflow-hidden">
              <img
                src="/manus-storage/developer-illustration_be4da823.png"
                alt="Developer Illustration"
                className="w-full h-full object-contain relative z-10"
              />

              {/* Animated glowing border effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 pointer-events-none"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(168, 85, 247, 0.3), inset 0 0 30px rgba(168, 85, 247, 0.1)',
                    '0 0 60px rgba(168, 85, 247, 0.5), inset 0 0 30px rgba(168, 85, 247, 0.2)',
                    '0 0 30px rgba(168, 85, 247, 0.3), inset 0 0 30px rgba(168, 85, 247, 0.1)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-neon-purple"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}







