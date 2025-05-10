// tailwind.config.js

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'fade-in': 'fadeIn 1s ease-in-out both',
        'slide-in-left': 'slideInLeft 1s ease-out both',
        'slide-in-right': 'slideInRight 1s ease-out both',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'animated-gradient':
          'linear-gradient(270deg, #ffffff, #f3f4f6, #ffffff)',
        'animated-gradient-dark':
          'linear-gradient(270deg, #111827, #1f2937, #111827)',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
    },
  },
  plugins: [],
};
