// components/AnimatedBlob.tsx
import { motion } from "framer-motion";
import React from "react";

interface AnimatedBlobProps {
  className?: string;
  color?: string;
  animateX?: number;
  animateY?: number;
  duration?: number;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({
  className = "",
  color = "bg-indigo-500",
  animateX = 10,
  animateY = 20,
  duration = 10,
}) => {
  return (
    <motion.div
      className={`absolute rounded-full filter blur-3xl pointer-events-none opacity-20 ${color} ${className}`}
      animate={{ y: [0, animateY, 0], x: [0, animateX, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

export default AnimatedBlob;
