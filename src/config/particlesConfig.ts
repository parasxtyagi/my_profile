// src/config/particlesConfig.ts

const particlesConfig = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 30 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.1 },
      size: { value: 3 },
      move: { speed: 0.5 },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };
  
  export default particlesConfig;
  