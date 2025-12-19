import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { projects } from '../../data/projects';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
  featured: boolean;
}

// Motion Variants for Staggered Animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 // Delays each card by 0.15s
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
};

export const Projects: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pt-8 pb-20">
      
      {/* 1. TYPOGRAPHY: Matching the Home Page Header */}
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-7xl font-light mb-6 text-[#2D2D2D] tracking-tight">
          Selected <span className="italic font-normal">Projects</span>
        </h1>
        <p className="text-xl text-[#2D2D2D] font-light italic max-w-lg mx-auto leading-relaxed">
          A selection of my personal experiments and code. 
          <br />
          Explorations in <span className="border-b border-[#E15549]/30 pb-0.5">full-stack engineering</span> & <span className="border-b border-[#E15549]/30 pb-0.5">ML applications</span>.
        </p>
      </div>

      {/* 2. THE CARDS (With Motion) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            whileHover={{ y: -8, rotateX: 2, rotateY: 2 }} 
            className="group relative bg-white/50 backdrop-blur-sm border border-[#2D2D2D]/10 p-8 rounded-xl transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(45,45,45,0.1)] hover:border-[#E15549]/30"
          >
            {/* Featured Badge */}
            {project.featured && (
              <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-bold text-[#E15549] border border-[#E15549]/20 px-2 py-1 rounded-full">
                Featured
              </span>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-medium text-[#2D2D2D] mb-3 font-serif group-hover:text-[#E15549] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light font-sans">
                {project.description}
              </p>
            </div>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="text-xs text-gray-500 bg-[#2D2D2D]/5 px-2 py-1 rounded font-medium font-sans">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* 3. BUTTONS: "View Project" & "Source Code" */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#2D2D2D]/5">
              <a 
                href={project.link} 
                className="flex items-center space-x-2 text-sm font-medium text-[#2D2D2D] hover:text-[#E15549] transition-colors group/link"
              >
                <span>View Project</span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
              
              <a 
                href={project.repo} 
                className="flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-[#2D2D2D] transition-colors"
              >
                <Github size={16} />
                <span>Source</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};