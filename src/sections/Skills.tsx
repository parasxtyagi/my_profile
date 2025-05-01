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
      className="py-16 px-6 md:px-20 scroll-mt-20 min-h-screen bg-gradient-to-br from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500"

      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-indigo-600 dark:text-indigo-400">
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
                className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-indigo-300 dark:hover:shadow-indigo-600/40 transition-all duration-500 hover:scale-105 group"
              >
                <div className="relative mb-4">
                  <svg className="w-20 h-20">
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      stroke="#E5E7EB"
                      strokeWidth={stroke}
                      fill="transparent"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      stroke="#6366F1"
                      strokeWidth={stroke}
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="round"
                      className="transition-all duration-700"
                    />
                  </svg>
                  <Icon className="text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-600 dark:text-indigo-400 group-hover:scale-125 group-hover:animate-pulse transition-all duration-500" />
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {skill.level}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
