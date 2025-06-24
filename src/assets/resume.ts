// src/assets/resume.ts

// Define interfaces for each section of your resume data for better type safety
export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  link?: string; // Made the 'link' property optional
}

export interface ResumeSkills {
  technical: string[];
  soft: string[];
}

// Main interface for the entire resume data object
export interface ResumeData {
  cvLink: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skills: ResumeSkills;
}

// Your resume data, now explicitly typed
export const resumeData: ResumeData = {
  cvLink: "/assets/Paras_Resume.pdf", // Ensure this path is correct relative to your public folder
  experience: [
    {
      role: "Full Stack Developer",
      company: "Freelancer",
      date: "2023 - Present",
      description: "Built several e-commerce projects with MERN stack, implemented payment gateways, AI tools, and AR/3D previews.",
    },
  ],
  education: [
    {
      degree: "BCA in Computer Science",
      institution: "GLA University",
      date: "2023 - Present", // Capitalized "Present" for consistency
      description: "Completed core CS courses with specialization in full-stack web development and machine learning.",
    },
  ],
  certifications: [
    {
      title: "React Developer Certification",
      issuer: "Meta / Coursera",
      date: "2024",
      link: "YOUR_REACT_CERT_LINK_HERE", // Add a real link or remove if not applicable
    },
    {
      title: "Backend Development with Node.js",
      issuer: "FreeCodeCamp",
      date: "2023",
      link: "YOUR_NODEJS_CERT_LINK_HERE", // Add a real link or remove if not applicable
    },
    {
      title: "Full-Stack Web Development Bootcamp", // Example of adding another cert with no link
      issuer: "Udemy",
      date: "2022",
      // No link property means it's treated as undefined, which is fine with 'link?: string'
    }
  ],
  skills: {
    technical: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind", "Next.js", "Firebase", "Three.js"],
    soft: ["Teamwork", "Communication", "Time Management", "Problem Solving"],
  },
};