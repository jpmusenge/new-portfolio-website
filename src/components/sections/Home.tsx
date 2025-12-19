import React from 'react';

export const Home: React.FC = () => {
  return (
    // Added pt-12 to account for the new top navigation
    <div className="max-w-2xl mx-auto pt-8"> 
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-light mb-4 text-[#2D2D2D] tracking-tight">
          Joseph <span className="italic font-normal">Musenge</span>
        </h1>
        <p className="text-lg text-gray-500 font-light italic">
          Rust College: BSc. Computer Science & Mathematics
        </p>
      </div>

      <div className="text-center mb-16 max-w-lg mx-auto">
        <p className="text-xl text-[#2D2D2D] font-light leading-relaxed">
          I'm a <span className="border-b border-[#E15549]/30 pb-0.5">software engineer</span>, 
          working at the intersection of mathematics, design & functionality. 
          Currently building <em>SafeLink HoverGuard</em>.
        </p>
      </div>

      <div className="space-y-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-3 h-3 bg-[#E15549] rounded-full mb-4 shadow-[0_0_10px_rgba(225,85,73,0.4)]"></div>
          <p className="text-xs text-[#E15549] font-bold tracking-[0.2em] uppercase">Today</p>
        </div>

        <div className="space-y-10">
          <div className="flex justify-between items-start group">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-[#2D2D2D] mb-1 group-hover:text-[#E15549] transition-colors duration-300">
                Software Engineering Intern
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Collaborating with faculty-led startup to develop innovative software solutions and architectural designs.
              </p>
            </div>
            <div className="text-right text-sm text-gray-400 font-medium italic ml-4">Present</div>
          </div>

          <div className="flex justify-between items-start group">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-[#2D2D2D] mb-1 group-hover:text-[#E15549] transition-colors duration-300">
                Computer Science & Math Major
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Junior pursuing a double major in Computer Science and Mathematics with a focus on software engineering and data science at Rust College. 
                Experience in full-stack development, data science, and mathematical research.
              </p>
            </div>
            <div className="text-right text-sm text-gray-400 font-medium italic ml-4">2023 — Present</div>
          </div>
        </div>

        <div className="pt-12 border-t border-[#2D2D2D]/10">
          <div className="flex space-x-8 text-sm justify-center md:justify-start">
            <a href="mailto:josephmusengep62@gmail.com" className="text-gray-500 hover:text-[#E15549] transition-colors relative group font-medium">
              Email
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#E15549] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="https://linkedin.com/in/joseph-musenge" className="text-gray-500 hover:text-[#E15549] transition-colors relative group font-medium">
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#E15549] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="https://github.com/JosephMusenge" className="text-gray-500 hover:text-[#E15549] transition-colors relative group font-medium">
              GitHub
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#E15549] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};