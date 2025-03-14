"use client";

import { useEffect, useState } from "react";

interface ParallaxEffectProps {
  children: React.ReactNode;
  speed?: number;
}

const ParallaxEffect = ({ children, speed = 0.05 }: ParallaxEffectProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) * speed;
      const y = (window.innerHeight / 2 - e.clientY) * speed;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [speed]);

  return (
    <div
      className="parallax"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxEffect;
