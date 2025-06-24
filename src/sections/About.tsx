// Enhanced About.tsx
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    { label: "Years Experience", value: "2+", icon: <FaReact className="text-indigo-600" /> },
    { label: "Projects Completed", value: "20+", icon: <FaNodeJs className="text-green-600" /> },
    { label: "Client Satisfaction", value: "100%", icon: <SiTypescript className="text-blue-600" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section 
      id="about"
      ref={ref}
      className="py-20 px-6 md:px-20 scroll-mt-20 min-h-screen bg-gradient-to-tr from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500 relative overflow-hidden"
    >
      {/* Floating tech icons background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5 pointer-events-none">
        <FaReact className="absolute top-1/4 left-10 text-6xl animate-float" />
        <SiTypescript className="absolute top-1/3 right-20 text-5xl animate-float animation-delay-2000" />
        <FaNodeJs className="absolute bottom-1/4 left-1/4 text-7xl animate-float animation-delay-3000" />
        <SiTailwindcss className="absolute bottom-1/3 right-1/3 text-6xl animate-float animation-delay-1000" />
        <FaDatabase className="absolute top-3/4 right-10 text-5xl animate-float animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image with floating effect */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { 
                type: "spring", 
                stiffness: 100,
                damping: 10
              }
            }
          }}
        >
          <div className="relative">
            <img
              src="/images/about.png"
              alt="About Illustration"
              className="w-full max-w-sm mx-auto drop-shadow-xl hover:scale-105 transition-transform duration-500 rounded-2xl"
            />
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-2xl -z-10 blur-lg"></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-600 dark:text-indigo-400"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            I'm a full-stack developer with a passion for creating elegant, efficient, and scalable web applications. From crafting pixel-perfect frontends to building robust backend APIs, I bring ideas to life through code.
          </motion.p>
          
          <motion.ul 
            className="space-y-4 mb-8"
            variants={itemVariants}
          >
            {[
              "🌐 Expertise in React, TypeScript, and Node.js",
              "🚀 Passionate about performance, animations & clean UI",
              "🛠️ Love to solve real-world problems through tech",
              "🎯 Always learning, always growing"
            ].map((item, i) => (
              <motion.li 
                key={i}
                className="flex items-center text-gray-600 dark:text-gray-300"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <span className="mr-3 text-indigo-500">{item.substring(0, 2)}</span>
                {item.substring(2)}
              </motion.li>
            ))}
          </motion.ul>

          {/* Enhanced stats cards */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                className="rounded-xl shadow-lg dark:shadow-xl bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-indigo-500/20 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="text-4xl mb-3">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;