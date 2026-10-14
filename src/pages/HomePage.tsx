import React from 'react';
import { Header } from '../components/Header';
import { Intro } from '../components/Intro';
import { ContactRow } from '../components/ContactRow';
import { ExperienceSection } from '../components/ExperienceSection';
import { AwardsSection } from '../components/AwardsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { WritingSection } from '../components/WritingSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => (
  <>
    <div className="space-y-14">
      <div className="space-y-2">
        <Header />
        <Intro />
      </div>
      <ContactRow />
      <ExperienceSection />
      <AwardsSection />
      <ProjectsSection />
      <WritingSection />
    </div>
    <div className="mt-16">
      <Footer />
    </div>
  </>
);
