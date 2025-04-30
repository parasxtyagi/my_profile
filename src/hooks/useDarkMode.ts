// src/hooks/useDarkMode.ts
import { useEffect, useState } from 'react';

export const useDarkMode = (): [boolean, () => void] => {
  const [enabled, setEnabled] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [enabled]);

  const toggle = () => setEnabled(!enabled);

  return [enabled, toggle];
};
