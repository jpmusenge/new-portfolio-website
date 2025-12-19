import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight, Twitter } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pt-8 pb-20">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-light mb-6 text-[#2D2D2D] tracking-tight">
          Say <span className="italic font-normal">Hi</span>
        </h1>
        
        <div className="max-w-xl mx-auto space-y-4 text-xl text-[#2D2D2D] font-light leading-relaxed">
          <p>
            Are you working on something new, exciting, or weird?
          </p>
          <p className="text-base text-gray-500 font-sans font-normal">
            I'm always interested in discussing new opportunities, collaborations, 
            or just chatting about tech. Pick your preferred channel below.
          </p>
        </div>
      </div>

      {/* The Contact Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Card 1: Email */}
        <motion.a 
          href="mailto:josephmusengep62@gmail.com"
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="group bg-white/50 backdrop-blur-sm border border-[#2D2D2D]/10 rounded-xl p-8 text-center hover:border-[#E15549]/30 hover:shadow-[0_20px_40px_-15px_rgba(225,85,73,0.1)] transition-all duration-300"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#FFF9F5] rounded-full border border-[#2D2D2D]/5 group-hover:scale-110 transition-transform duration-300">
              <Mail className="text-[#2D2D2D] group-hover:text-[#E15549] transition-colors" size={28} />
            </div>
          </div>
          <h3 className="text-lg font-medium text-[#2D2D2D] mb-2 font-serif">Email</h3>
          <p className="text-sm text-gray-500 font-sans mb-4">Drop me a direct line</p>
          <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-[#E15549] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Send Message <ArrowUpRight size={12} className="ml-1" />
          </span>
        </motion.a>

        {/* Card 2: LinkedIn */}
        <motion.a 
          href="https://linkedin.com/in/joseph-musenge"
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="group bg-white/50 backdrop-blur-sm border border-[#2D2D2D]/10 rounded-xl p-8 text-center hover:border-[#E15549]/30 hover:shadow-[0_20px_40px_-15px_rgba(225,85,73,0.1)] transition-all duration-300"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#FFF9F5] rounded-full border border-[#2D2D2D]/5 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="text-[#2D2D2D] group-hover:text-[#E15549] transition-colors" size={28} />
            </div>
          </div>
          <h3 className="text-lg font-medium text-[#2D2D2D] mb-2 font-serif">LinkedIn</h3>
          <p className="text-sm text-gray-500 font-sans mb-4">Connect professionally</p>
          <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-[#E15549] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Connect <ArrowUpRight size={12} className="ml-1" />
          </span>
        </motion.a>

        {/* Card 3: GitHub */}
        <motion.a 
          href="https://github.com/JosephMusenge"
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="group bg-white/50 backdrop-blur-sm border border-[#2D2D2D]/10 rounded-xl p-8 text-center hover:border-[#E15549]/30 hover:shadow-[0_20px_40px_-15px_rgba(225,85,73,0.1)] transition-all duration-300"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#FFF9F5] rounded-full border border-[#2D2D2D]/5 group-hover:scale-110 transition-transform duration-300">
              <Github className="text-[#2D2D2D] group-hover:text-[#E15549] transition-colors" size={28} />
            </div>
          </div>
          <h3 className="text-lg font-medium text-[#2D2D2D] mb-2 font-serif">GitHub</h3>
          <p className="text-sm text-gray-500 font-sans mb-4">Check out my code</p>
          <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-[#E15549] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Follow <ArrowUpRight size={12} className="ml-1" />
          </span>
        </motion.a>

        {/* Card 4: X (Twitter) - NEW */}
        <motion.a 
          href="https://x.com/_josephmusenge" 
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="group bg-white/50 backdrop-blur-sm border border-[#2D2D2D]/10 rounded-xl p-8 text-center hover:border-[#E15549]/30 hover:shadow-[0_20px_40px_-15px_rgba(225,85,73,0.1)] transition-all duration-300"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-[#FFF9F5] rounded-full border border-[#2D2D2D]/5 group-hover:scale-110 transition-transform duration-300">
              <Twitter className="text-[#2D2D2D] group-hover:text-[#E15549] transition-colors" size={28} />
            </div>
          </div>
          <h3 className="text-lg font-medium text-[#2D2D2D] mb-2 font-serif">X (Twitter)</h3>
          <p className="text-sm text-gray-500 font-sans mb-4">Thoughts & Updates</p>
          <span className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-[#E15549] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Follow <ArrowUpRight size={12} className="ml-1" />
          </span>
        </motion.a>

      </motion.div>

      {/* NEW LOCATION FOOTER */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center mt-20 pt-8 border-t border-[#2D2D2D]/10"
      >
        <p className="text-[#2D2D2D]/60 font-serif italic text-lg tracking-wide">
          Currently based in Memphis, TN — but often in Seattle, WA.
        </p>
      </motion.div>
    </div>
  );
};