// src/assets/projects.ts

// Define the Project interface for type safety
export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  categories: string[]; // This is the crucial line we're adding
}

export const projects: Project[] = [
  {
    title: "MERN Stack E-Commerce Store",
    description: "A full-featured E-Commerce store built with the MERN stack, supporting user authentication, product management, cart functionality, secure payments, and admin controls.",
    tech: ["React", "Material-UI", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Redux"], // Added Express.js and Redux for clarity
    image: "/images/react-shopcart.png",
    github: "https://github.com/parasxtyagi",
    demo: "https://yourshopcart.netlify.app/",
    categories: ["full-stack", "e-commerce", "mern"], // Added categories
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive personal portfolio with engaging animations, dark mode, and a functional contact form using EmailJS.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "GSAP", "EmailJS"], // Added CSS to Tailwind and EmailJS
    image: "/images/portfolio.png",
    github: "https://github.com/parasxtyagi",
    demo: "https://paraswebdev.netlify.app",
    categories: ["frontend", "portfolio", "react"], // Added categories
  },
  {
    title: "Basic E-Commerce Headset Store",
    description: "A simple full-stack E-Commerce headset store with user login, shopping cart, and product display features.",
    tech: ["JavaScript", "HTML", "CSS", "Node.js", "Express.js", "MongoDB", "JWT"], // Added HTML, CSS, Express.js
    image: "/images/basic-shopcart.png",
    github: "https://github.com/parasxtyagi",
    demo: "https://shopcartreal.netlify.app",
    categories: ["full-stack", "e-commerce", "javascript"], // Added categories
  },
];