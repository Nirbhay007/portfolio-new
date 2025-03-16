"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, Database, PaintBucket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StarField from '@/components/star-field';

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations and responsive design.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    github: "https://github.com/Nirbhay007/portfolio-new",
    demo: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Firebase", "Material UI"],
    category: "fullstack",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for any location.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["JavaScript", "OpenWeather API", "Chart.js"],
    category: "frontend",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Blog API",
    description: "A RESTful API for a blog platform with authentication, posts, comments, and user management.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "UI Component Library",
    description: "A custom UI component library with reusable components for web applications.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Storybook", "CSS Modules"],
    category: "ui",
    github: "#",
    demo: "#",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = [
    { id: 'all', name: 'All Projects', icon: Layers },
    { id: 'frontend', name: 'Frontend', icon: PaintBucket },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'fullstack', name: 'Full Stack', icon: Code },
    { id: 'ui', name: 'UI/UX', icon: PaintBucket },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Portfolio</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore my projects and see how I bring ideas to life through code and design.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                className="gap-2"
                onClick={() => setFilter(category.id)}
              >
                <Icon size={16} />
                {category.name}
              </Button>
            );
          })}
        </motion.div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg card-hover"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demo} 
                      className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-lg text-foreground/70">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </>
  );
}