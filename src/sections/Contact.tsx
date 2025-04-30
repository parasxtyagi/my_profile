import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactConfig } from "../assets/contact";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

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
        },
        () => toast.error("Failed to send message. Please try again!")
      )
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      style={{ minHeight: "100vh" }}
      className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2"
        >
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-md col-span-full bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-md col-span-full bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Your Message"
            className="border border-gray-300 dark:border-gray-600 px-4 py-3 rounded-md col-span-full bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition w-full sm:w-fit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="mt-10 text-center space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          Or connect with me here:
        </p>
        <div className="flex justify-center gap-6 text-2xl text-indigo-600 dark:text-indigo-400">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-800"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-indigo-800"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
