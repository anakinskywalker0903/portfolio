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

  // Block devtools inspection in production builds, while allowing it in development
  useEffect(() => {
    if (!import.meta.env.PROD) return;

    const blockInspect = (e: MouseEvent) => {
      e.preventDefault();
    };

    const blockKeys = (e: KeyboardEvent) => {
      // Disable F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
      }
      // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
      }
      // Disable Ctrl+U (View Source)
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85)) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', blockInspect);
    document.addEventListener('keydown', blockKeys);

    return () => {
      document.removeEventListener('contextmenu', blockInspect);
      document.removeEventListener('keydown', blockKeys);
    };
  }, []);

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
