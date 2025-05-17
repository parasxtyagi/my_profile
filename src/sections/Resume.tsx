import { resumeData } from "../assets/resume";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section
      id="resume"
      style={{ minHeight: "100vh" }}
      className="py-16 px-6 md:px-20 scroll-mt-20 min-h-screen bg-gradient-to-br from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
            Resume
          </h2>
          <a href="/Paras_Tyagi_CV.docx" download="Paras_Resume.docx"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Download CV
          </a>

        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Experience
          </h3>
          {resumeData.experience.map((item, i) => (
            <div key={i} className="mb-4">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {item.role} —{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  {item.company}
                </span>
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {item.date}
              </p>
              <p className="mt-1">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Education
          </h3>
          {resumeData.education.map((item, i) => (
            <div key={i} className="mb-4">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {item.degree}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {item.institution} — {item.date}
              </p>
              <p className="mt-1">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Certifications
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            {resumeData.certifications.map((cert, i) => (
              <li key={i} className="mb-2">
                {cert.title} —{" "}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.issuer}, {cert.date}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.technical.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-700 dark:text-indigo-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.soft.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-emerald-100 text-emerald-600 dark:bg-emerald-700 dark:text-emerald-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
