// src/App.tsx

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // store refs keyed by section id
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});

  useLayoutEffect(() => {
    // build an animation for each registered section
    const animations = Object.entries(sectionsRef.current).map(([id, el]) => {
      if (!el) return null;
      return gsap.fromTo(
        el,
        { autoAlpha: 0, y: -50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
 
    // cleanup: kill animations & ScrollTriggers
    return () => {
      animations.forEach((anim) => anim?.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // helper to bind a section's ref by its id
  const bindSection = (id: string) => (el: HTMLDivElement | null) => {
    sectionsRef.current[id] = el;
  };

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section id="hero" ref={bindSection('hero')}>
          <Hero />
        </section>

        {/* About */}
        <section id="about" ref={bindSection('about')}>
          <About />
        </section>

        {/* Skills */}
        <section id="skills" ref={bindSection('skills')}>
          <Skills />
        </section>

        {/* Portfolio */}
        <section id="portfolio" ref={bindSection('portfolio')}>
          <Portfolio />
        </section>

        {/* Resume */}
        <section id="resume" ref={bindSection('resume')}>
          <Resume />
        </section>

        {/* Contact */}
        <section id="contact" ref={bindSection('contact')}>
          <Contact />
        </section>
      </main>

      {/* Toast notifications */}
      <Toaster position="top-right" />

      {/* Footer */}
      <Footer />
    </>
  );
}
