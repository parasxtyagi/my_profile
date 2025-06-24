import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactConfig } from "../assets/contact";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        contactConfig.serviceId,
        contactConfig.templateId,
        formRef.current!,
        contactConfig.publicKey
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current?.reset();
          setIsSubmitted(true);
        },
        () => toast.error("Failed to send message. Please try again!")
      )
      .finally(() => setLoading(false));
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 scroll-mt-20 min-h-screen bg-gradient-to-tr from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-indigo-600 dark:text-indigo-400 text-6xl mb-6">
              <FaPaperPlane />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
              Message Sent!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for reaching out. I'll get back to you soon.
            </p>
            <button
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              onClick={resetForm}
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative col-span-full">
              <input
                type="text"
                name="user_name"
                required
                className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 peer"
                id="name-input"
              />
              <label 
                htmlFor="name-input"
                className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-focus:px-1 peer-valid:-top-2 peer-valid:text-sm peer-valid:bg-white dark:peer-valid:bg-gray-800 peer-valid:px-1"
              >
                Your Name
              </label>
            </div>

            <div className="relative col-span-full">
              <input
                type="email"
                name="user_email"
                required
                className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 peer"
                id="email-input"
              />
              <label 
                htmlFor="email-input"
                className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-focus:px-1 peer-valid:-top-2 peer-valid:text-sm peer-valid:bg-white dark:peer-valid:bg-gray-800 peer-valid:px-1"
              >
                Your Email
              </label>
            </div>

            <div className="relative col-span-full">
              <textarea
                name="message"
                rows={5}
                required
                className="w-full border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 peer resize-none"
                id="message-input"
              ></textarea>
              <label 
                htmlFor="message-input"
                className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-top-2 peer-focus:text-sm peer-focus:bg-white dark:peer-focus:bg-gray-800 peer-focus:px-1 peer-valid:-top-2 peer-valid:text-sm peer-valid:bg-white dark:peer-valid:bg-gray-800 peer-valid:px-1"
              >
                Your Message
              </label>
            </div>

            <motion.button
              type="submit"
              className="col-span-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        )}

        {/* Social links */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Or connect with me here:
          </p>
          <div className="flex justify-center gap-6">
            {[
              {
                icon: <FaLinkedin />,
                url: "https://linkedin.com/in/yourprofile",
                color: "text-blue-600 hover:text-blue-700",
              },
              {
                icon: <FaGithub />,
                url: "https://github.com/yourusername",
                color: "text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300",
              },
              {
                icon: <FaEnvelope />,
                url: "mailto:youremail@example.com",
                color: "text-red-500 hover:text-red-600",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${social.color} transition-colors`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;