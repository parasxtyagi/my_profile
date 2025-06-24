// components/CustomCursor.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Main cursor (instant)
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1
      });
      
      // Follower (lagging)
      gsap.to(followerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: 'power2.out'
      });
    };

    const onMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        gsap.to([cursorRef.current, followerRef.current], {
          scale: 0.5,
          backgroundColor: 'rgba(99, 102, 241, 0.5)',
          duration: 0.3
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to([cursorRef.current, followerRef.current], {
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

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed w-4 h-4 rounded-full bg-indigo-500 pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef}
        className="fixed w-8 h-8 rounded-full bg-indigo-100/10 pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}