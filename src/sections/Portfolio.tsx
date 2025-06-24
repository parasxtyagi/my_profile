// src/components/Portfolio.tsx
import { projects } from "../assets/projects";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set(projects.flatMap((project) => project.categories))),
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeFilter)
        );

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // ✅ Add explicit types to fix TypeScript complaints
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // Valid type
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 px-6 md:px-20 scroll-mt-20 min-h-screen bg-gradient-to-tr from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work and case studies
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={item}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                activeFilter === category
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={item}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden shadow-xl dark:border-gray-700 hover:shadow-2xl hover:shadow-indigo-300/30 dark:hover:shadow-indigo-600/20 transition-all duration-300 group relative"
              whileHover={{ y: -10 }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-indigo-600 text-white px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs bg-indigo-800 text-white px-2 py-1 rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {project.description}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3 mt-4">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex-1 text-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition flex-1 text-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
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
};

export default Portfolio;
