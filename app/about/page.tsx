"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Calendar,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import StarField from "@/components/star-field";
import AnimatedText from "@/components/animated-text";

export default function About() {
  return (
    <>
      <StarField />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me
            as a developer.
          </p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Professional Profile
            </h2>
            <p className="text-foreground/80">
              I'm a passionate software developer with expertise in building
              modern web applications. With a strong foundation in both frontend
              and backend technologies, I create seamless, user-friendly
              experiences that solve real-world problems.
            </p>
            <p className="text-foreground/80">
              My approach combines technical excellence with creative
              problem-solving. I believe in writing clean, maintainable code and
              staying current with industry best practices and emerging
              technologies.
            </p>
            <p className="text-foreground/80">
              When I'm not coding, you can find me exploring space stuff,
              reading articles, or diving into open-source projects.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                className="gap-2"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1y7TyF8Lt88g8-DRKM--2qZvYQPmwT267/view?usp=sharing"
                  )
                }
              >
                <Download size={18} />
                View Resume
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => window.open("tel:+917004191931", "_self")}
              >
                <Mail size={18} />
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-3">
                  Frontend Development
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "HTML/CSS",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-secondary px-3 py-2 rounded-md text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3">
                  Backend Development
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "GraphQL",
                    "REST API",
                    "Spring Boot",
                    "Java",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-secondary px-3 py-2 rounded-md text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-3">Tools & Others</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Git",
                    "Docker",
                    "AWS",
                    "CI/CD",
                    "Jest",
                    "Figma",
                    "Strapi",
                    "GCP",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-secondary px-3 py-2 rounded-md text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Work Experience
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border md:ml-5">
            {[
              {
                title: "Full Stack Developer",
                company: "Ather Energy",
                period: "2022 - Present",
                description:
                  "Led the development of responsive web applications using React and Next.js. Implemented backend solutions and optimized performance for large-scale applications.",
              },
              {
                title: "Trainee Engineer - Software Development",
                company: "One Advanced",
                period: "2022 - 2022",
                description:
                  "Developed and maintained legacy applications using Java and Spring Boot. Collaborated with cross-functional teams to deliver high-quality software solutions.",
              },
              {
                title: "Internship - Software Developer",
                company: "DevSpeak",
                period: "2021 - 2021",
                description:
                  "Building web applications using React and python. Worked on various projects and gained hands-on experience with modern web technologies.",
              },
            ].map((job, index) => (
              <div key={index} className="relative flex items-start group">
                <div className="flex flex-col items-center mr-4 md:mr-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card text-primary z-10">
                    <Briefcase size={18} />
                  </div>
                  <div className="w-px h-full bg-border group-last:hidden"></div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md flex-1 card-hover">
                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex items-center text-sm text-foreground/70">
                      <Calendar size={14} className="mr-1" />
                      {job.period}
                    </div>
                  </div>
                  <div className="text-primary font-medium mb-3">
                    {job.company}
                  </div>
                  <p className="text-foreground/80">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Education
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-border md:ml-5">
            {[
              {
                degree: "Bachelors in Information Technology",
                institution: "Muzaffarpur Institute of Technology",
                period: "2019 - 2022",
                description:
                  "Specialized in Software Engineering. Coursework included data structures, algorithms, database systems, and web development.",
              },
              {
                degree: "Diploma",
                institution: "Anna University",
                period: "2016 - 2019",
                description: "Graduated with honors.",
              },
            ].map((edu, index) => (
              <div key={index} className="relative flex items-start group">
                <div className="flex flex-col items-center mr-4 md:mr-8">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card text-primary z-10">
                    <GraduationCap size={18} />
                  </div>
                  <div className="w-px h-full bg-border group-last:hidden"></div>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md flex-1 card-hover">
                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <div className="flex items-center text-sm text-foreground/70">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <div className="text-primary font-medium mb-3">
                    {edu.institution}
                  </div>
                  <p className="text-foreground/80">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
