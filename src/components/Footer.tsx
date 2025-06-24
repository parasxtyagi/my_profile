import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/parasxtyagi",
      label: "GitHub"
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:parast2004@gmail.com",
      label: "Email"
    }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-8 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p 
            className="text-sm md:text-base"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            &copy; {new Date().getFullYear()} Paras | All rights reserved.
          </motion.p>
          
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-white hover:text-indigo-400 transition-colors"
                whileHover={{ y: -3, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Back to top button - positioned absolutely relative to viewport */}
        {/* <motion.a
          href="#hero"
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-50"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
          style={{
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FaArrowUp size={18} />
        </motion.a> */}
      </div>
    </motion.footer>
  );
};

export default Footer;