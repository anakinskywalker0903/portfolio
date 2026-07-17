import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { SkillsPage } from '@/pages/SkillsPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { ClientWorkPage } from '@/pages/ClientWorkPage';
import { ExperiencePage } from '@/pages/ExperiencePage';
import { LearningArchivePage } from '@/pages/LearningArchivePage';

export default function App() {
  return (
    <Router>
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
