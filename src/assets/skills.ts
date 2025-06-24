import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaSass, // Added Sass
  FaNpm, // Added NPM
  FaYarn, // Added Yarn
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiExpress, // Added Express
  SiMongoose, // Added Mongoose
  // SiRedux, 
  SiWebpack, // Added Webpack
  SiBabel, // Added Babel
  SiPostman, // Added Postman
  SiVercel, // Added Vercel
  SiNetlify, // Added Netlify
  SiVite, // Added Vite
  // SiJira, 
  // SiJest, 
  SiTestinglibrary, // Added React Testing Library
  SiSocketdotio, // Added Socket.IO
  SiGraphql, // Added GraphQL
  // SiPrisma, 
  SiDocker, // Added Docker
} from "react-icons/si";
import { DiAws } from "react-icons/di"; // Added AWS

export interface Skill {
  name: string;
  icon: IconType;
  level: string;
  category: string;
}

export const skills: Skill[] = [
  // Frontend Technologies
  { name: "HTML5", icon: FaHtml5, level: "Advanced", category: "frontend" },
  { name: "CSS3", icon: FaCss3Alt, level: "Advanced", category: "frontend" },
  { name: "JavaScript (ES6+)", icon: FaJsSquare, level: "Advanced", category: "frontend" },
  { name: "TypeScript", icon: SiTypescript, level: "Proficient", category: "frontend" },
  { name: "React.js", icon: FaReact, level: "Advanced", category: "frontend" },
  // { name: "Redux", icon: SiRedux, level: "Proficient", category: "frontend" },
  { name: "React Router", icon: FaReact, level: "Proficient", category: "frontend" }, // Using FaReact for now
  { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", category: "frontend" },
  { name: "Sass/SCSS", icon: FaSass, level: "Intermediate", category: "frontend" },

  // Backend Technologies
  { name: "Node.js", icon: FaNodeJs, level: "Proficient", category: "backend" },
  { name: "Express.js", icon: SiExpress, level: "Proficient", category: "backend" },
  { name: "RESTful APIs", icon: FaNodeJs, level: "Advanced", category: "backend" }, // Using FaNodeJs for now
  { name: "GraphQL", icon: SiGraphql, level: "Intermediate", category: "backend" },
  { name: "Socket.IO", icon: SiSocketdotio, level: "Intermediate", category: "backend" },

  // Databases
  { name: "MongoDB", icon: SiMongodb, level: "Proficient", category: "database" },
  { name: "Mongoose ODM", icon: SiMongoose, level: "Proficient", category: "database" },
  { name: "PostgreSQL", icon: FaNodeJs, level: "Intermediate", category: "database" }, // Placeholder icon if no specific one
  // { name: "Prisma ORM", icon: SiPrisma, level: "Beginner", category: "database" },

  // Tools & DevOps
  { name: "Git", icon: FaGitAlt, level: "Advanced", category: "tools" },
  { name: "NPM", icon: FaNpm, level: "Advanced", category: "tools" },
  { name: "Yarn", icon: FaYarn, level: "Proficient", category: "tools" },
  { name: "Webpack", icon: SiWebpack, level: "Intermediate", category: "tools" },
  { name: "Babel", icon: SiBabel, level: "Intermediate", category: "tools" },
  { name: "Vite", icon: SiVite, level: "Proficient", category: "tools" },
  { name: "Postman", icon: SiPostman, level: "Advanced", category: "tools" },
  { name: "VS Code", icon: SiTypescript, level: "Advanced", category: "tools" }, // Using SiTypescript for now
  // { name: "Jira", icon: SiJira, level: "Intermediate", category: "tools" },
  // { name: "Jest", icon: SiJest, level: "Intermediate", category: "testing" },
  { name: "React Testing Library", icon: SiTestinglibrary, level: "Intermediate", category: "testing" },

  // Deployment & Cloud
  { name: "Vercel", icon: SiVercel, level: "Proficient", category: "deployment" },
  { name: "Netlify", icon: SiNetlify, level: "Proficient", category: "deployment" },
  { name: "AWS (S3, EC2 basics)", icon: DiAws, level: "Beginner", category: "cloud" },
  { name: "Docker (Basics)", icon: SiDocker, level: "Beginner", category: "tools" },
];