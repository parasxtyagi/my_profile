import { skills } from "../assets/skills";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set(skills.map((skill) => skill.category))),
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const getSkillPercent = (level: string): number => {
    switch (level.toLowerCase()) {
      case "beginner":
        return 25;
      case "intermediate":
        return 50;
      case "proficient":
        return 75;
      case "advanced":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-6 md:px-20 scroll-mt-20 min-h-screen bg-gradient-to-br from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500 relative overflow-hidden"
    >
      {/* Background bubbles */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-400"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.2 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            My Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I've mastered and regularly work with
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={item}
              className={`px-4 py-2 rounded-full capitalize transition-all ${
                activeCategory === category
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={container}
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            const percent = getSkillPercent(skill.level);
            const radius = 30;
            const stroke = 6;
            const circumference = 2 * Math.PI * radius;
            const dashOffset = circumference * (1 - percent / 100);

            return (
              <motion.div
                key={index}
                custom={index}
                variants={item}
                className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:shadow-indigo-300/30 dark:hover:shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative mb-4">
                  <svg className="w-20 h-20">
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      stroke="#E5E7EB"
                      strokeWidth={stroke}
                      fill="transparent"
                      className="dark:stroke-gray-700"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r={radius}
                      stroke="#6366F1"
                      strokeWidth={stroke}
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: dashOffset }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                    />
                  </svg>
                  <Icon className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-600 dark:text-indigo-400 group-hover:scale-125 transition-all duration-500" />
                </div>
                <h3 className="text-lg font-semibold text-center">
                  {skill.name}
                </h3>
                <motion.p
                  className="text-sm text-gray-500 dark:text-gray-300 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {skill.level}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
