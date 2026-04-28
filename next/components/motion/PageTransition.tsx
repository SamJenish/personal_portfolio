"use client";

import { motion, Variants } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const slideUp: Variants = {
    initial: {
      y: "100%",
    },
    enter: {
      y: "0%",
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const, delay: 0.2 },
    },
  };

  return (
    <>
      {/* Slide up overlay */}
      <motion.div
        className="fixed inset-0 z-50 bg-[#0a0a0a]"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }}
      />
      
      {/* Page content with slide up */}
      <motion.div
        variants={slideUp}
        initial="initial"
        animate="enter"
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </>
  );
}
