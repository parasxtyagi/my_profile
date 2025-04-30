import { skills } from "../assets/skills";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

// Skill level to percent
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

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-indigo-600 dark:text-indigo-400">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
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
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-indigo-200 dark:hover:shadow-indigo-500/20 transition duration-300 hover:scale-105 group"
              >
                <div className="relative mb-4">
                  <svg className="w-20 h-20">
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      stroke="#E5E7EB" // Tailwind's gray-200
                      strokeWidth={stroke}
                      fill="transparent"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      stroke="#6366F1" // Tailwind's indigo-500
                      strokeWidth={stroke}
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="round"
                      className="transition-all duration-700"
                    />
                  </svg>
                  <Icon className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{skill.level}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
