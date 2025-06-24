// App.tsx
import { useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import Cursor from './components/CustomCursor';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const location = useLocation();
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const cursorRef = useRef<HTMLDivElement>(null); // For custom cursor

  // Scroll progress effect
  useEffect(() => {
    const updateScrollProgress = () => {
      // 'scroll-progress' ID wale element ko dhundho
      const scrollProgress = document.getElementById('scroll-progress');
      if (!scrollProgress) {
        // Agar element nahi mila to function se bahar nikal jao
        return;
      }

      // Poore document ki scrollable height calculate karo
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Current scroll position
      const scrollPosition = window.scrollY;

      // Progress calculate karo (0 se 100%)
      // Division by zero se bachne ke liye check add kiya
      const progress = scrollHeight > 0 ? (scrollPosition / scrollHeight) * 100 : 0;

      // Scroll progress bar ki width update karo
      scrollProgress.style.width = `${progress}%`;
    };

    // Scroll event listener add karo
    window.addEventListener('scroll', updateScrollProgress);

    // Cleanup function: component unmount hone par event listener remove karo
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []); // Empty dependency array ensures it runs only once on mount
  // Custom cursor effect (optional)
  useEffect(() => {
    if (!cursorRef.current) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const onMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          backgroundColor: 'rgba(99, 102, 241, 0.3)',
          duration: 0.3
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  // Section animations (yeh pehle se tha)
  useLayoutEffect(() => {
    // ScrollTrigger instances ko store karne ke liye array
    const createdScrollTriggers: ScrollTrigger[] = [];

    const animations = Object.entries(sectionsRef.current).map(([, el]) => {
      if (!el) return null;

      const st = ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
        markers: false, // Debugging ke liye false rakha hai, agar true karoge to markers dikhenge
        animation: gsap.fromTo(el,
          { autoAlpha: 0, y: 50 },
          { duration: 1, autoAlpha: 1, y: 0, ease: "power3.out" }
        )
      });
      createdScrollTriggers.push(st);
      return st.animation; // Return animation for cleanup
    });

    // Horizontal scroll effect for any elements with .horizontal-scroll class (yeh bhi pehle se tha)
    gsap.utils.toArray(".horizontal-scroll").forEach((section: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: "+=2000"
        }
      });

      tl.to(section, {
        xPercent: -100,
        ease: "none"
      });
    });

    return () => {
      animations.forEach(anim => anim?.kill());
      // Saare created ScrollTriggers ko kill karo
      createdScrollTriggers.forEach(st => st.kill());
      ScrollTrigger.getAll().forEach(st => st.kill()); // Extra safety, if any other triggers exist
    };
  }, []);

  const bindSection = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el;
  };

  return (
    <>
    <Cursor />
      {/* Optional custom cursor - comment out if not needed */}
      {/* <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full bg-indigo-100/10 pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      /> */}

      <Navbar />

      <main className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Single page application routes */}
            <Route path="/" element={
              <>
                {/* Hero */}
                <motion.section
                  id="hero"
                  ref={bindSection('hero')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero />
                </motion.section>

                {/* About */}
                <motion.section
                  id="about"
                  ref={bindSection('about')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <About />
                </motion.section>

                {/* Skills */}
                <motion.section
                  id="skills"
                  ref={bindSection('skills')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Skills />
                </motion.section>

                {/* Portfolio */}
                <motion.section
                  id="portfolio"
                  ref={bindSection('portfolio')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Portfolio />
                </motion.section>

                {/* Resume */}
                <motion.section
                  id="resume"
                  ref={bindSection('resume')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Resume />
                </motion.section>

                {/* Contact */}
                <motion.section
                  id="contact"
                  ref={bindSection('contact')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Contact />
                </motion.section>
              </>
            } />
          </Routes>
        </AnimatePresence>

        {/* Background elements */}
        {/* <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/50 via-transparent to-indigo-100/20 dark:from-gray-900/50 dark:to-indigo-900/10"></div>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-indigo-500/5 dark:bg-indigo-400/5"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(40px)',
                opacity: 0.3
              }}
            />
          ))}
        </div> */}
      </main>

      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            color: '#1e293b',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          },
          duration: 4000
        }}
      />

      <Footer />

      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 h-1 bg-indigo-600 z-50"
        style={{
          width: '0%',
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6)'
        }}
        id="scroll-progress"
      />
    </>
  );
}
