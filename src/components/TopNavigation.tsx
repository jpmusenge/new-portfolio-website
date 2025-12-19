import React from 'react';
import { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export const TopNavigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Overview' }, 
    { id: 'experiences', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Say hi' } 
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 p-8 z-50 flex justify-end items-center bg-gradient-to-b from-[#FFF9F5] via-[#FFF9F5]/80 to-transparent">
      <div className="flex space-x-8">
        {navItems.map((nav) => (
          <button
            key={nav.id}
            onClick={() => setActiveSection(nav.id as Section)}
            className={`
              text-sm font-medium tracking-wide transition-all duration-300 relative group
              ${activeSection === nav.id ? 'text-[#2D2D2D] italic' : 'text-gray-500 hover:text-[#E15549]'}
            `}
          >
            {nav.label}
            
            <span className={`
              absolute -bottom-1 left-0 w-full h-px bg-[#E15549] transform origin-left transition-transform duration-300
              ${activeSection === nav.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
            `}></span>
          </button>
        ))}
      </div>
    </nav>
  );
};