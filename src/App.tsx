import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { SkillsPage } from '@/pages/SkillsPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ClientWorkPage } from '@/pages/ClientWorkPage';
import { ExperiencePage } from '@/pages/ExperiencePage';
import { LearningArchivePage } from '@/pages/LearningArchivePage';
import { Preloader } from '@/components/ui/Preloader';
import { PreloaderDoneContext } from '@/components/ui/PreloaderContext';

// Scroll to top on every route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Always show preloader on every page load / refresh
  const [loading, setLoading] = useState(true);
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = () => {
    setLoading(false);
    // Small extra delay to let the slide-up exit animation finish before typing starts
    setTimeout(() => setPreloaderDone(true), 100);
  };

  return (
    <PreloaderDoneContext.Provider value={preloaderDone}>
      <Router>
        <ScrollToTop />

        {/* Global Cinematic Preloader */}
        <AnimatePresence mode="wait">
          {loading && (
            <Preloader onComplete={handlePreloaderComplete} />
          )}
        </AnimatePresence>

        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/client-work" element={<ClientWorkPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certifications" element={<LearningArchivePage />} />
          </Routes>
        </Layout>
      </Router>
    </PreloaderDoneContext.Provider>
  );
}
