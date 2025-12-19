import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Section } from './types';
import { TopNavigation } from './components/TopNavigation';
import { Home } from './components/sections/Home';
import { Experiences } from './components/sections/Experiences';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import InteractiveBackground from './components/InteractiveBackground';


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home />;
      case 'experiences': return <Experiences />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen relative text-[#2D2D2D]">
      <InteractiveBackground />

      {/* top Nav */}
      <TopNavigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* smooth Content Area */}
      <main className="relative z-10 pt-32 pb-16 px-6 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(2px)' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }} // "Quart" easing for elegance
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;