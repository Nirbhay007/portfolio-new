"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = () => setCursorVariant('hover');
    const handleMouseOut = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);

    // Add event listeners to all clickable elements
    const clickableElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    clickableElements.forEach((element) => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      clickableElements.forEach((element) => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 20,
      width: 20,
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 40,
      width: 40,
      backgroundColor: "rgba(139, 92, 246, 0.5)",
      mixBlendMode: "normal",
    },
  };

  const trailVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      opacity: 0.5,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 100,
        damping: 10,
        delay: 0.05,
      },
    },
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 100,
          damping: 10,
        }}
      />
      <motion.div
        className="custom-cursor-trail"
        variants={trailVariants}
        animate="default"
      />
    </>
  );
};

export default CustomCursor;