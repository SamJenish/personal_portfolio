"use client";

import { useEffect, useState } from "react";
import { motion, Variant } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [cursorVariant, setCursorVariant] = useState("default");
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for project view context
      if (target.closest('[data-cursor="view"]')) {
        setCursorVariant("view");
        return;
      }
      
      // Check for links and buttons
      if (target.closest("a") || target.closest("button") || target.closest('[data-cursor="link"]')) {
        setCursorVariant("link");
        return;
      }
      
      setCursorVariant("default");
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (!mounted || (x === 0 && y === 0)) return null;

  const variants: Record<string, Variant> = {
    default: {
      height: 12,
      width: 12,
      x: x - 6,
      y: y - 6,
      backgroundColor: "#ededed",
      border: "0px solid transparent",
      mixBlendMode: "difference",
    },
    link: {
      height: 48,
      width: 48,
      x: x - 24,
      y: y - 24,
      backgroundColor: "transparent",
      border: "1px solid #ededed",
      mixBlendMode: "difference",
    },
    view: {
      height: 80,
      width: 80,
      x: x - 40,
      y: y - 40,
      backgroundColor: "#ededed",
      border: "0px solid transparent",
      mixBlendMode: "normal",
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center text-[#0a0a0a] font-medium tracking-widest text-[10px] uppercase"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 700, damping: 35, mass: 0.5 }}
    >
      {cursorVariant === "view" && <span className="opacity-100">View</span>}
    </motion.div>
  );
}
