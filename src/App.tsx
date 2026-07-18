import { useEffect, useState } from 'react';
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

// Scroll to top on every route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    // Run preloader once per session to avoid annoying returning visits during testing
    return !sessionStorage.getItem('rd_preloaded');
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('rd_preloaded', 'true');
    setLoading(false);
  };

  return (
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
  );
}
