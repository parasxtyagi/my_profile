import { resumeData } from "../assets/resume";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

const Resume = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  return (
    <section
      id="resume"
      ref={ref}
      className="py-20 px-6 md:px-20 scroll-mt-20 min-h-screen bg-gradient-to-br from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 sm:mb-0">
            My Resume
          </h2>
          <motion.a
            href="/Paras_Tyagi_CV.docx"
            download="Paras_Resume.docx"
            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download CV
          </motion.a>
        </motion.div>

        {/* Experience Section */}
        <motion.div initial="hidden" animate={controls} variants={container} className="mb-16">
          <motion.div className="flex items-center gap-4 mb-8" variants={item}>
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-300">
              <FaBriefcase className="text-xl" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold">Experience</h3>
          </motion.div>

          <div className="space-y-8 pl-4 sm:pl-16 border-l-2 border-indigo-200 dark:border-indigo-900">
            {resumeData.experience.map((expItem, i) => (
              <motion.div key={i} className="relative pl-8" variants={item} whileHover={{ x: 5 }}>
                <div className="absolute left-0 top-1 w-4 h-4 bg-indigo-600 rounded-full -translate-x-1/2"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-lg sm:text-xl font-medium">
                    {expItem.role} —{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">{expItem.company}</span>
                  </h4>
                  <p className="text-sm text-indigo-500 dark:text-indigo-300 mb-3">{expItem.date}</p>
                  <p className="text-gray-600 dark:text-gray-300">{expItem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div initial="hidden" animate={controls} variants={container} className="mb-16">
          <motion.div className="flex items-center gap-4 mb-8" variants={item}>
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-300">
              <FaGraduationCap className="text-xl" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold">Education</h3>
          </motion.div>

          <div className="space-y-8 pl-4 sm:pl-16 border-l-2 border-indigo-200 dark:border-indigo-900">
            {resumeData.education.map((eduItem, i) => (
              <motion.div key={i} className="relative pl-8" variants={item} whileHover={{ x: 5 }}>
                <div className="absolute left-0 top-1 w-4 h-4 bg-indigo-600 rounded-full -translate-x-1/2"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="text-lg sm:text-xl font-medium">{eduItem.degree}</h4>
                  <p className="text-sm text-indigo-500 dark:text-indigo-300 mb-3">
                    {eduItem.institution} — {eduItem.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{eduItem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div initial="hidden" animate={controls} variants={container} className="mb-16">
          <motion.div className="flex items-center gap-4 mb-8" variants={item}>
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-300">
              <FaCertificate className="text-xl" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold">Certifications</h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {resumeData.certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-lg font-medium mb-2">{cert.title}</h4>
                <p className="text-sm text-indigo-500 dark:text-indigo-300 mb-3">
                  {cert.issuer}, {cert.date}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    View Credential
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div initial="hidden" animate={controls} variants={container}>
          <motion.h3 className="text-2xl sm:text-3xl font-semibold mb-8" variants={item}>
            Skills
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-medium text-lg text-indigo-600 dark:text-indigo-400 mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills.technical.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="text-sm px-3 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <h4 className="font-medium text-lg text-emerald-600 dark:text-emerald-400 mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills.soft.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="text-sm px-3 py-1 bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
