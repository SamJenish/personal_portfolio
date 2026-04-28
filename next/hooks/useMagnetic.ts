import { useState, useEffect, RefObject } from "react";

export default function useMagnetic(ref: RefObject<HTMLElement | null>, radius: number = 60) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = node.getBoundingClientRect();
      
      // Calculate center of the element
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Distance from center to mouse
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;
      
      // Euclidean distance
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // If within radius, apply magnetic pull
      if (distance < radius) {
        setPosition({ x: distanceX * 0.4, y: distanceY * 0.4 });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    // Reset when mouse leaves window
    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, radius]);

  return position;
}
