const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Paras | All rights reserved.</p>
          <div className="flex gap-4 text-xl mt-3 md:mt-0">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:youremail@example.com" className="hover:text-indigo-500">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  