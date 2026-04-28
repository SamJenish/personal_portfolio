"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import useMagnetic from "../../hooks/useMagnetic";

export default function Magnetic({ children, radius = 60, className = "" }: { children: React.ReactNode, radius?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const position = useMagnetic(ref, radius);

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
