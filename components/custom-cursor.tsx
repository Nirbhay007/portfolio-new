"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(true);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      if (!hasMouseMoved) setHasMouseMoved(true);
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, [isMobile, hasMouseMoved]);

  useEffect(() => {
    if (isMobile) return;

    const handleLinkHoverEvents = () => {
      const links = document.querySelectorAll('a, button, .cursor-hover');

      links.forEach((link) => {
        link.addEventListener('mouseenter', () => setCursorVariant('hover'));
        link.addEventListener('mouseleave', () => setCursorVariant('default'));
      });

      return () => {
        links.forEach((link) => {
          link.removeEventListener('mouseenter', () => setCursorVariant('hover'));
          link.removeEventListener('mouseleave', () => setCursorVariant('default'));
        });
      };
    };

    const cleanup = handleLinkHoverEvents();
    return cleanup;
  }, [isMobile]);

  // Don't render anything on mobile or before mouse movement
  if (isMobile || !hasMouseMoved) return null;

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 32,
      width: 32,
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 64,
      width: 64,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      mixBlendMode: "difference" as const,
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
          damping: 25,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      <motion.div
        className="custom-cursor-trail"
        variants={trailVariants}
        animate="default"
      />
    </>
  );
}