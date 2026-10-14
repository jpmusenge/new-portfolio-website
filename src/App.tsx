import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ContourField } from './components/ContourField';
import { ThemeToggle } from './components/ThemeToggle';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { WritingPage } from './pages/WritingPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-paper text-ink">
        <ContourField />

        <div className="fixed right-6 top-6 z-50 sm:right-8 sm:top-8">
          <ThemeToggle />
        </div>

        <main className="relative z-10 mx-auto max-w-column px-6 pb-24 pt-20 sm:pt-28">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/writing" element={<WritingPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
