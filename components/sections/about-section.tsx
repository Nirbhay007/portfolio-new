// components/sections/about-section.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-3xl font-bold text-primary">
            About Me
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Software developer with a passion for solving real world problems
            and creating{" "}
            <span className="text-primary font-bold">
              innovative digital experiences
            </span>
            .
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1974&auto=format&fit=crop"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-foreground/80">
              Love to explore and learn new things in{" "}
              <span className="text-primary font-bold">tech</span> list of few
              technologies I have worked with:
            </p>
            <ul className="list-none mt-8">
              <li className="mb-4">
                <span className="text-foreground/80">Languages: </span>
                <span className="text-special font-bold">
                  JavaScript, TypeScript, HTML, CSS ,Java, Python, C++
                </span>
              </li>
              <li className="mb-4">
                <span className="text-foreground/80">
                  Libraries & Frameworks:{" "}
                </span>
                <span className="text-special font-bold">
                  React, Next.js, Node.js, SpringBoot, Express.js
                </span>
              </li>
              <li className="mb-4">
                <span className="text-foreground/80">Databases: </span>
                <span className="text-special font-bold">
                  MongoDB, PostgreSQL,Redis
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
