import { useRef, useState, useLayoutEffect, MouseEvent } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import heroAnim from "../assets/anim/hero-loop.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedBlob from "../components/AnimatedBlob";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
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

      // Text animation
      gsap.from(textElements, {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Image animation
      gsap.from(imgRef.current, {
        autoAlpha: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Refresh scroll trigger after short delay
      setTimeout(() => ScrollTrigger.refresh(), 300);
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
      {/* Background Lottie Animation */}
      <Lottie
        animationData={heroAnim}
        loop
        autoplay
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      {/* Left Content Container */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start">
        {/* Text Content */}
        <div
          className="text-center md:text-left space-y-6 w-full max-w-lg"
          ref={textRef}
        >
          {/* Animated Blob behind text */}
          <AnimatedBlob
            className="absolute -top-10 -left-10 w-72 h-72 -z-10"
            color="bg-indigo-500"
            animateX={10}
            animateY={20}
            duration={10}
          />

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

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I build scalable, performant, and user‑focused web apps. Let's
            collaborate and bring ideas to life!
          </p>
        </div>

        {/* Action Buttons - positioned relative to text container */}
        <div className="flex mt-10 justify-center md:justify-start gap-4 w-full">
          <motion.a
            href="#portfolio"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* Right Image Container */}
      <div className="relative z-10 w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <div
          className="relative"
          ref={imgRef}
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
          {/* Animated Blob behind image */}
          <AnimatedBlob
            className="absolute -bottom-16 -right-16 w-96 h-96 -z-10"
            color="bg-purple-500"
            animateX={-15}
            animateY={-30}
            duration={12}
          />

          <img
            src="/images/hero.png"
            alt="Hero Illustration"
            className="w-full max-w-md drop-shadow-xl hover:scale-105 transition-transform duration-500 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}