import { useRef, useState, MouseEvent, useLayoutEffect } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import particlesConfig from "../config/particlesConfig";
import heroAnim from "../assets/anim/hero-loop.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * 20;
    setMousePos({ x, y });
  };

  useLayoutEffect(() => {
    if (!ref.current || !textRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      const textElements = textRef.current?.querySelectorAll("*") ?? [];
      if (textElements.length > 0) {
        gsap.from(textElements, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      }

      gsap.from(imgRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 scroll-mt-20
                 bg-animated-gradient dark:bg-animated-gradient-dark transition-colors duration-1000 overflow-hidden"
    >
      {/* ✅ Particles without init */}
      <Particles
        id="tsparticles"
        options={particlesConfig}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Background Lottie */}
      <Lottie
        animationData={heroAnim}
        loop
        autoplay
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      {/* Left Text Section */}
      <div
        ref={textRef}
        className="z-10 text-center md:text-left md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
          Hi, I'm{" "}
          <motion.span
            className="text-indigo-600 dark:text-indigo-400 inline-block"
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Paras
          </motion.span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md leading-relaxed mx-auto md:mx-0">
          I build scalable, performant, and user‑focused web apps. Let's collaborate and bring ideas to life!
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <motion.a
            href="#portfolio"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* Right Image Section */}
      <div
        ref={imgRef}
        className="z-10 md:w-1/2 mb-10 md:mb-0"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        <img
          src="/images/hero.png"
          alt="Hero Illustration"
          className="w-full max-w-md mx-auto drop-shadow-xl hover:scale-105 transition-transform duration-500 rounded-2xl"
        />
      </div>
    </section>
  );
}
