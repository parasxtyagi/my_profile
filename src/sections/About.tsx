import { useEffect, useRef } from 'react';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.target.classList.toggle("animate-fade-in-up", entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();  
  }, []);

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  return (
    <section 
      id="about"
      ref={ref}
      className="py-16 px-6 md:px-20 scroll-mt-20 min-h-screen bg-gradient-to-tr from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full">
          <img
            src="/images/about.png"
            alt="About Illustration"
            className="w-full max-w-sm mx-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I'm a full-stack developer with a passion for creating elegant, efficient, and scalable web applications. From crafting pixel-perfect frontends to building robust backend APIs, I bring ideas to life through code.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2 mb-6">
            <li>🌐 Expertise in React, TypeScript, and Node.js</li>
            <li>🚀 Passionate about performance, animations & clean UI</li>
            <li>🛠️ Love to solve real-world problems through tech</li>
            <li>🎯 Always learning, always growing</li>
          </ul>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            {stats.map((item, i) => (
              <div
                key={i}
                className="rounded-xl shadow-md dark:shadow-lg bg-white dark:bg-gray-800 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-indigo-500/20"
              >
                <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
