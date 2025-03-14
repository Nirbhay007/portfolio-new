"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Cosmic Dashboard',
    description: 'A responsive admin dashboard with dark mode, data visualization, and real-time updates.',
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    category: 'frontend',
  },
  {
    id: 2,
    title: 'Nebula E-commerce',
    description: 'Full-stack e-commerce platform with product management, cart functionality, and payment integration.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'Stellar API',
    description: 'RESTful API service with authentication, rate limiting, and comprehensive documentation.',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2069&auto=format&fit=crop',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    category: 'backend',
  },
  {
    id: 4,
    title: 'Orbit Social',
    description: 'Social media platform with real-time messaging, post sharing, and user profiles.',
    image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?q=80&w=2070&auto=format&fit=crop',
    tags: ['React', 'Firebase', 'Redux', 'Styled Components'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    category: 'fullstack',
  },
  {
    id: 5,
    title: 'Galaxy Weather',
    description: 'Weather application with location detection, forecasts, and beautiful visualizations.',
    image: 'https://images.unsplash.com/photo-1534996858221-380b92700493?q=80&w=2031&auto=format&fit=crop',
    tags: ['React Native', 'TypeScript', 'Weather API', 'Geolocation'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    category: 'mobile',
  },
  {
    id: 6,
    title: 'Pulsar Analytics',
    description: 'Data analytics platform with interactive dashboards and report generation.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop',
    tags: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    category: 'frontend',
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'mobile', name: 'Mobile' },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background/50" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">My Portfolio</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Explore my recent projects and see how I bring ideas to life with code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="hover-effect"
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index % 3) }}
              className="bg-card rounded-lg overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;