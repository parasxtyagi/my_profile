// src/components/Navbar.tsx
import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <a href="#hero" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Paras
        </a>

        {/* Desktop Links + DarkMode */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              {link.name}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 text-2xl text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2 shadow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="mt-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
          </button>
        </div>
      )}
    </header>
  );
}
