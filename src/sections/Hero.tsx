import { useEffect, useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.target.classList.toggle("animate-fade-in-up", entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-br from-white via-slate-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 scroll-mt-20"
    >
      {/* Left: Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Paras</span>
          <br />
          A Passionate Full-Stack Developer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md leading-relaxed mx-auto md:mx-0">
          I craft clean, scalable web apps with beautiful UI and smooth interactions. Let's build something amazing together.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition-all duration-300"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <img
          src="/images/hero.png"
          alt="Hero Illustration"
          className="w-full max-w-md mx-auto drop-shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Hero;
