import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { SkillsPage } from '@/pages/SkillsPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ClientWorkPage } from '@/pages/ClientWorkPage';
import { ExperiencePage } from '@/pages/ExperiencePage';
import { LearningArchivePage } from '@/pages/LearningArchivePage';

// Scroll to top on every route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
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
