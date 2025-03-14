"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

const FloatingAstronaut = () => {
  const astronautRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!astronautRef.current) return;

    // Create a floating animation
    gsap.to(astronautRef.current, {
      y: "15px",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Create a slight rotation animation
    gsap.to(astronautRef.current, {
      rotate: 3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main planet */}
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image
          src="/images/planet-main.png"
          alt="Large Planet"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {typeof window !== "undefined" && window.innerWidth > 768 && (
        <>
          {/* Small planets */}
          <motion.div
            className="absolute left-10 top-10 w-20 h-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image
              src="/images/planet-small-1.png"
              alt="Small Planet"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.div
            className="absolute left-1/4 bottom-1/4 w-36 h-36"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/images/planet-small-2.png"
              alt="Small Planet"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </>
      )}

      {/* Astronaut */}
      <motion.div
        ref={astronautRef}
        className="absolute left-1/3 top-1/3 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
        // Initial state of the animation
        initial={{
          // Start with 0 opacity
          opacity: 0,
          // Move the astronaut 50px up and 20px to the right
          y: -50,
          // x: 20,
          // Scale the astronaut to 0.8
          scale: 0.8,
        }}
        // Animation target
        animate={{
          // Set the opacity to 1
          opacity: 1,
          // Move the astronaut back to its original position
          y: 0,
          x: 0,
          // Scale the astronaut to 1
          scale: 1,
        }}
        // Animation transition
        transition={{
          // Duration of the animation
          duration: 1.2,
          // Delay the animation by 0.5s
          delay: 0.5,
          // Make the animation feel more natural
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/ast1.png"
          alt="Floating Astronaut"
          // fill
          className="object-contain"
          width={450}
          height={500}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default FloatingAstronaut;
