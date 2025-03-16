"use client";

import AnimatedText from "@/components/animated-text";
import FloatingAstronaut from "@/components/floating-astronaut";
import ParallaxEffect from "@/components/parallax-effect";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";
const HeroSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { theme } = useTheme();
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${theme === "dark" ? "space-bg" : "bg-background"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <AnimatedText
                text="Nirbhay Singh"
                className="gradient-text"
                delay={0.2}
                marginBottom={3}
              />
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
              <AnimatedText
                text="Full Stack Developer"
                delay={0.4}
                marginRight={2}
              />
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-lg mx-auto md:mx-0">
              <AnimatedText
                text="Creating value through code, one line at a time."
                delay={0.6}
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="hover-effect" asChild>
                <a href="https://github.com/nirbhay007" target="_blank">
                  View My Work
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-effect"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <ParallaxEffect speed={0.03}>
              <FloatingAstronaut />
            </ParallaxEffect>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNextSection}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
