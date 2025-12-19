import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  current: boolean;
}

const experiences: Experience[] = [
  {
    title: "Explore Software Engineering Intern",
    company: "Microsoft",
    location: "Redmond, WA",
    period: "05.2025 — 08.2025",
    description: "Interned on an AIOps team, and worked on the systems that keep internal support services running smoothly. I helped build a scalable mapping and automation pipeline that connected support signals across services.",
    current: false
  },
  {
    title: "New Technologist (Software Engineering & PM) Intern",
    company: "Microsoft",
    location: "Redmond, WA", 
    period: "06.2024 — 08.2024",
    description: "Collaborated on development of a full-stack web application from scratch for luggage space management. Implemented backend integration using Node.js and Firebase for secure data management and user authentication.",
    current: false
  },
  {
    title: "Full-stack Developer Intern",
    company: "Rust College IT Department",
    location: "Holly Springs, MS", 
    period: "05.2023 — 07.2023",
    description: "Co‑developed a new Rust College online programs website using JavaScript and PHP, strengthening the college’s digital presence. I also optimized the main site’s performance, and significantly improving user experience.",
    current: false
  },
  {
    title: "Data for Good Hackathon 1st Winner",
    company: "JP Morgan Chase & Co.",
    location: "Plano, TX",
    period: "04.2025",
    description: "First place winner at the Data for Good hackathon. Led a team of 6 developers to create an innovative solution in 48 hours.",
    current: false
  },
  {
    title: "Future of Work Academy (FOWA) Tech Competition 1st Winner",
    company: "Hewlett Packard Inc. (HP Inc.)",
    location: "Houston, TX",
    period: "10.2023",
    description: "First place winner for ChromaSoul project at HP's FOWA Future Tech Competition. Part of a team of 3 to develop an AI-powered art experience using Microsoft Azure Cognitive Services and Power BI.",
    current: false
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
};

export const Experiences: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto pt-8 pb-20">
      <div className="text-center mb-20">
        <h1 className="text-6xl md:text-7xl font-light mb-6 text-[#2D2D2D] tracking-tight">
          Professional <span className="italic font-normal">Journey</span>
        </h1>
        <p className="text-xl text-[#2D2D2D] font-light italic max-w-lg mx-auto leading-relaxed">
          Building software, solving problems, and 
          <span className="border-b border-[#E15549]/30 pb-0.5 mx-1">learning</span> 
          along the way.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12 relative border-l border-[#2D2D2D]/10 ml-4 md:ml-0 pl-8 md:pl-12"
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="group relative"
          >
            {/* Timeline Dot (Lights up on hover) */}
            <span className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full bg-[#FFF9F5] border-2 border-[#2D2D2D]/20 group-hover:border-[#E15549] group-hover:bg-[#E15549] transition-all duration-300"></span>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-2xl font-medium text-[#2D2D2D] group-hover:text-[#E15549] transition-colors font-serif pr-4">
                {exp.title}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-400 font-medium italic mt-1 md:mt-0 shrink-0 whitespace-nowrap">
                <Calendar size={14} />
                <span>{exp.period}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm text-[#2D2D2D]/60 mb-4 font-sans tracking-wide uppercase">
              <span className="font-semibold text-[#2D2D2D]">{exp.company}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <MapPin size={12} />
                <span>{exp.location}</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed font-light text-base max-w-2xl">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
};