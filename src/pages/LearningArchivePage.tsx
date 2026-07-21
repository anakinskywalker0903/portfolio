import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaAward, FaHourglassHalf, FaCompass, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const archiveItems = [
  // --- FEATURED ---
  {
    id: 'ORACLE-JAVA-2026',
    name: 'Oracle Certified Foundations Associate, Java',
    issuer: 'Oracle University',
    year: '2026',
    icon: '☕',
    hours: '40 hours',
    category: 'featured',
    desc: 'Demonstrates foundational knowledge of Java technology and programming, covering core concepts, data structures, and OOP methodologies.',
    learnt: 'Java syntax, object-oriented concepts (inheritance, encapsulation, polymorphism), control flow structures, exception handling, data structures, and APIs.',
    skills: ['Java', 'OOP', 'Data Structures', 'Exception Handling'],
    verifyUrl: '/certficates/eCertificate.pdf',
  },
  {
    id: 'NPTEL-CLOUD-2026',
    name: 'Cloud Computing (12-Week Course - Elite)',
    issuer: 'NPTEL (IIT Kharagpur)',
    year: '2026',
    icon: '🌥️',
    hours: '60 hours',
    category: 'featured',
    desc: 'A rigorous academic course covering the fundamental design, models, resource virtualization, and architecture of cloud infrastructure.',
    learnt: 'Cloud design models, SaaS/PaaS/IaaS setups, hypervisors, resource allocation, storage virtualization, MapReduce frameworks.',
    skills: ['Cloud Architecture', 'Virtualization', 'Resource Scheduling', 'MapReduce'],
    verifyUrl: '/certficates/NPTEL26CS55S105240514304822312.pdf',
  },
  {
    id: 'UMICH-AML-2026',
    name: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan (Coursera)',
    year: '2026',
    icon: '🐍',
    hours: '40 hours',
    category: 'featured',
    desc: 'Advanced machine learning course covering data analysis, predictive modeling, clustering, and deep evaluation strategies.',
    learnt: 'Supervised & unsupervised learning algorithms, scikit-learn interfaces, SVM regression, decision trees, cross-validation metrics.',
    skills: ['Python', 'Scikit-Learn', 'Feature Engineering', 'Model Evaluation'],
    verifyUrl: '/certficates/Coursera 7RSUPVFLCPS3.pdf',
  },
  {
    id: 'LINKEDIN-GH-2026',
    name: 'Career Essentials in GitHub Professional Certificate',
    issuer: 'LinkedIn Learning × GitHub',
    year: '2026',
    icon: '🐙',
    hours: '15 hours',
    category: 'featured',
    desc: 'Professional credentials pathway validating workflows optimization, automated actions, and enterprise collaboration.',
    learnt: 'Repository environments management, actions configuration settings, collaboration pipelines, Copilot configurations, and search parameters.',
    skills: ['GitHub Actions', 'GitHub Copilot', 'Project Management', 'Workflow Automation'],
    verifyUrl: '/certficates/CertificateOfCompletion_Career Essentials in GitHub Professional Certificate.pdf',
  },

  // --- GITHUB SERIES ---
  {
    id: 'GH-ACTIONS',
    name: 'Practical GitHub Actions',
    issuer: 'LinkedIn Learning × GitHub',
    year: '2026',
    icon: '⚙️',
    hours: '4 hours',
    category: 'github-series',
    desc: 'Practical implementation of CI/CD pipelines, custom runners, environment variables, and build automation sequences.',
    learnt: 'Workflow YAML setups, actions triggers, custom runners deployments, artifacts storage triggers, secure keys parameters.',
    skills: ['CI/CD Pipelines', 'GitHub Actions', 'Automation Scripting'],
    verifyUrl: '/certficates/CertificateOfCompletion_Practical GitHub Actions.pdf',
  },
  {
    id: 'GH-COPILOT',
    name: 'Practical GitHub Copilot',
    issuer: 'LinkedIn Learning × GitHub',
    year: '2026',
    icon: '🤖',
    hours: '3 hours',
    category: 'github-series',
    desc: 'Leveraging AI-assisted prompt triggers, context boundaries, code completions, and debug assistants inline.',
    learnt: 'Prompt engineering patterns, security completions check, refactoring helpers, inline tests generation.',
    skills: ['GitHub Copilot', 'AI Pair Programming', 'Refactoring Helpers'],
    verifyUrl: '/certficates/CertificateOfCompletion_Practical GitHub Copilot.pdf',
  },
  {
    id: 'GH-SEARCH',
    name: 'Practical GitHub Code Search',
    issuer: 'LinkedIn Learning × GitHub',
    year: '2026',
    icon: '🔍',
    hours: '3 hours',
    category: 'github-series',
    desc: 'Advanced search syntax, indexing codes, locating security configurations, and scoping codebases.',
    learnt: 'Regex code locator, scoping branches metadata, security audits mapping, cross-repo matching syntax.',
    skills: ['Code Auditing', 'Search Syntax', 'Repository Indexing'],
    verifyUrl: '/certficates/CertificateOfCompletion_Practical GitHub Code Search.pdf',
  },
  {
    id: 'GH-COLLAB',
    name: 'Practical GitHub Project Management and Collaboration',
    issuer: 'LinkedIn Learning × GitHub',
    year: '2026',
    icon: '👥',
    hours: '5 hours',
    category: 'github-series',
    desc: 'Managing team project boards, issue trackers, pull request review gates, and branch protections.',
    learnt: 'Milestones planning, branch locks policies, peer review workflows, conflict resolutions, tags management.',
    skills: ['Project Boards', 'Review Gates', 'Conflict Resolution'],
    verifyUrl: '/certficates/CertificateOfCompletion_Practical GitHub Project Management and Collaboration.pdf',
  },

  // --- DATA SERIES ---
  {
    id: 'PBI-DESKTOP',
    name: 'Learning Power BI Desktop',
    issuer: 'Microsoft / LinkedIn Learning',
    year: '2026',
    icon: '📊',
    hours: '5 hours',
    category: 'data-series',
    desc: 'Visualizing relational data, database connects, and cleaning modeling parameters.',
    learnt: 'Power Query cleaning filters, data models schemas, measures calculations, interactive visuals grids.',
    skills: ['Power BI Desktop', 'Data Cleaning', 'Relational Schemas'],
    verifyUrl: '/certficates/CertificateOfCompletion_Learning Power BI Desktop.pdf',
  },
  {
    id: 'PBI-DASH',
    name: 'Power BI Dashboards for Beginners',
    issuer: 'Microsoft / LinkedIn Learning',
    year: '2026',
    icon: '📈',
    hours: '4 hours',
    category: 'data-series',
    desc: 'Designing dashboard metrics layouts, sharing portals, and analytics report setups.',
    learnt: 'Visual layout rules, reports publishing setups, key metrics cards, slicers controllers.',
    skills: ['Dashboard Design', 'Business Analytics', 'Reporting Portals'],
    verifyUrl: '/certficates/CertificateOfCompletion_Power BI Dashboards for Beginners.pdf',
  },
  {
    id: 'DASH-PYTHON',
    name: 'Data Visualization in Python with Dash',
    issuer: 'LinkedIn Learning',
    year: '2026',
    icon: '🐍',
    hours: '6 hours',
    category: 'data-series',
    desc: 'Building Python-powered analytics web dashboards using Plotly and Dash frameworks.',
    learnt: 'Dash layout components, reactive input-output decorators callbacks, Plotly charts rendering, CSS skins styling.',
    skills: ['Dash Framework', 'Plotly Charts', 'Python callbacks'],
    verifyUrl: '/certficates/CertificateOfCompletion_Data Visualization in Python with Dash.pdf',
  },

  // --- ACHIEVEMENTS ---
  {
    id: 'FIN-QUIZ-2026',
    name: 'National Financial Literacy Quiz 2026',
    issuer: 'National Financial Authorities',
    year: '2026',
    icon: '🏆',
    hours: '2 hours',
    category: 'achievements',
    desc: 'Certificate of Participation validating knowledge of core personal finance parameters, investment basics, and digital transaction securities.',
    learnt: 'Digital payments safety checks, basic credit scoring parameters, interest rate indexes calculations, assets diversification rules.',
    skills: ['Financial Literacy', 'Personal Finance Basics', 'Digital Payments Security'],
    verifyUrl: '/certficates/Certificate_8777453162_29012026083726.pdf',
  }
];

export function LearningArchivePage() {
  const [activeItem, setActiveItem] = useState<typeof archiveItems[0] | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const featuredItems = archiveItems.filter(item => item.category === 'featured');
  const githubSeriesItems = archiveItems.filter(item => item.category === 'github-series');
  const dataAnalyticsItems = archiveItems.filter(item => item.category === 'data-series');
  const achievementItems = archiveItems.filter(item => item.category === 'achievements');

  return (
    <div className="w-full min-h-screen bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 border-b border-black/5 pb-8">
          <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            LEARNING LOG
          </span>
          <h2
            className="text-[clamp(3rem,8vw,80px)] font-black leading-none tracking-tighter text-black uppercase"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            CONTINUOUS<br />
            <span className="text-[#0038FF]">LEARNING</span>
          </h2>
          <p className="text-black/50 text-sm max-w-md font-medium leading-relaxed mt-4">
            A structured repository of verified certifications, deep specialized training courses, and academic milestones.
          </p>
        </div>

        {/* Featured Section */}
        <div className="mb-16">
          <h3 className="text-xl font-black text-black uppercase tracking-tight mb-6 pb-2 border-b-2 border-black/10 flex items-center gap-2">
            <FaAward className="text-[#0038FF] w-5 h-5" /> Featured Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item);
                  setShowPdf(false);
                }}
                className="text-left bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#0038FF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 cursor-pointer group relative"
              >
                <div className="text-3xl flex-shrink-0 bg-black/5 w-12 h-12 rounded-full flex items-center justify-center border-2 border-black/10 group-hover:border-black transition-all">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[8px] font-black uppercase bg-[#0038FF]/10 text-[#0038FF] border border-[#0038FF]/10 px-2 py-0.5 rounded-full tracking-wider block w-fit mb-1.5">
                    {item.issuer} • {item.year}
                  </span>
                  <h4 className="font-black text-black text-sm uppercase leading-tight group-hover:text-[#0038FF] transition-colors pr-6">
                    {item.name}
                  </h4>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {item.skills && item.skills.map((s, i) => (
                      <span key={i} className="text-[8px] font-black uppercase bg-[#CCFF00] text-black border border-black px-2.5 py-0.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Floating link arrow icon */}
                <div className="absolute top-6 right-6 text-black/30 group-hover:text-[#0038FF] transition-colors">
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Collections Section */}
        <div className="mb-16">
          <h3 className="text-xl font-black text-black uppercase tracking-tight mb-6 pb-2 border-b-2 border-black/10">
            📂 Learning Collections
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* GitHub Learning Series */}
            <div className="border-[3px] border-black rounded-[2.5rem] p-6 bg-white shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#0038FF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black uppercase bg-[#CCFF00] text-black border border-black px-2.5 py-1 rounded-full tracking-wider block w-fit mb-3">
                  GITHUB LEARNING SERIES (4)
                </span>
                <h4 className="font-black text-lg text-black uppercase leading-tight">
                  GitHub Ecosystem Suite
                </h4>
                <p className="text-black/60 text-xs mt-2 leading-relaxed font-medium">
                  4 specialized courses covering GitHub Actions, Copilot automation, Code Search, and collaborative Project management pipelines.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2 border-t border-black/5 pt-4">
                {githubSeriesItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item);
                      setShowPdf(false);
                    }}
                    className="text-left py-2.5 px-3.5 hover:bg-black/5 rounded-xl flex items-center justify-between text-xs font-black uppercase text-black/70 hover:text-black transition-all group cursor-pointer border border-transparent hover:border-black/10"
                  >
                    <span className="truncate max-w-[260px] tracking-wide">⚙️ {item.name}</span>
                    <span className="text-[9px] font-black uppercase text-black/40 group-hover:text-[#0038FF] flex items-center gap-1.5 flex-shrink-0">
                      Details ➔
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Data Analytics Series */}
            <div className="border-[3px] border-black rounded-[2.5rem] p-6 bg-white shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#0038FF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black uppercase bg-[#CCFF00] text-black border border-black px-2.5 py-1 rounded-full tracking-wider block w-fit mb-3">
                  DATA ANALYTICS & VISUALIZATION (3)
                </span>
                <h4 className="font-black text-lg text-black uppercase leading-tight">
                  Business Intelligence Stack
                </h4>
                <p className="text-black/60 text-xs mt-2 leading-relaxed font-medium">
                  3 specialized courses covering Microsoft Power BI Desktop dashboard architectures and Python-powered visualization using Dash.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2 border-t border-black/5 pt-4">
                {dataAnalyticsItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item);
                      setShowPdf(false);
                    }}
                    className="text-left py-2.5 px-3.5 hover:bg-black/5 rounded-xl flex items-center justify-between text-xs font-black uppercase text-black/70 hover:text-black transition-all group cursor-pointer border border-transparent hover:border-black/10"
                  >
                    <span className="truncate max-w-[260px] tracking-wide">📊 {item.name}</span>
                    <span className="text-[9px] font-black uppercase text-black/40 group-hover:text-[#0038FF] flex items-center gap-1.5 flex-shrink-0">
                      Details ➔
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-12">
          <h3 className="text-xl font-black text-black uppercase tracking-tight mb-6 pb-2 border-b-2 border-black/10">
            🏆 Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievementItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveItem(item);
                  setShowPdf(false);
                }}
                className="text-left bg-white border-[3px] border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#CCFF00] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4 cursor-pointer group relative"
              >
                <div className="text-3xl flex-shrink-0 bg-black/5 w-12 h-12 rounded-full flex items-center justify-center border-2 border-black/10 group-hover:border-black transition-all">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[8px] font-black uppercase bg-[#CCFF00] text-black border border-black px-2 py-0.5 rounded-full tracking-wider block w-fit mb-1.5">
                    {item.issuer} • {item.year}
                  </span>
                  <h4 className="font-black text-black text-sm uppercase leading-tight group-hover:text-[#0038FF] transition-colors pr-6">
                    {item.name}
                  </h4>
                  <span className="inline-block mt-3 text-[9px] font-black uppercase bg-black/5 text-black px-2.5 py-0.5 rounded-full border border-black/10">
                    Quiz Participation Certificate
                  </span>
                </div>
                <div className="absolute top-6 right-6 text-black/30 group-hover:text-[#CCFF00] transition-colors">
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Overlay Modal for Certificate details */}
        <AnimatePresence>
          {activeItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setActiveItem(null);
                  setShowPdf(false);
                }}
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 16 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative w-full max-w-xl bg-white border-[3px] border-black rounded-[2.5rem] shadow-2xl overflow-hidden z-10 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b-2 border-black bg-[#CCFF00]/10">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">{activeItem.icon}</span>
                    <div>
                      <h3 className="font-black text-sm text-black uppercase leading-tight max-w-[280px]">
                        {activeItem.name}
                      </h3>
                      <span className="text-[10px] font-black uppercase text-black/50 tracking-wider">
                        {activeItem.issuer} • {activeItem.year}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setActiveItem(null);
                      setShowPdf(false);
                    }}
                    className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all flex-shrink-0 cursor-pointer"
                  >
                    <IoClose className="w-4 h-4" />
                  </button>
                </div>

                {/* Conditional Body: PDF Viewer vs Details Text */}
                {showPdf ? (
                  <div className="p-4 bg-zinc-900 flex flex-col gap-4">
                    <iframe
                      src={activeItem.verifyUrl}
                      className="w-full h-[55vh] rounded-2xl border-[3px] border-black bg-white"
                      title="Certificate PDF Viewer"
                    />
                    <div className="flex justify-between items-center text-white text-xs font-bold px-2">
                      <button
                        onClick={() => setShowPdf(false)}
                        className="text-[#CCFF00] hover:text-white transition-colors cursor-pointer uppercase font-black tracking-wider"
                      >
                        ◀ Back to Details
                      </button>
                      <span className="text-white/50">Local Archive Viewer</span>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Details Info */}
                    <div className="p-8 flex flex-col gap-5">
                      {/* Overview */}
                      <div>
                        <h4 className="text-[#0038FF] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                          <FaAward /> Overview
                        </h4>
                        <p className="text-black/70 text-xs font-medium leading-relaxed">
                          {activeItem.desc}
                        </p>
                      </div>

                      {/* What I Learnt */}
                      <div>
                        <h4 className="text-[#0038FF] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                          <FaBookOpen /> What I Learnt
                        </h4>
                        <p className="text-black/70 text-xs font-medium leading-relaxed">
                          {activeItem.learnt}
                        </p>
                      </div>

                      {/* Skills Gained */}
                      <div>
                        <h4 className="text-[#0038FF] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-2">
                          <FaCompass /> Skills Gained
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeItem.skills && activeItem.skills.map((s, i) => (
                            <span key={i} className="text-[9px] font-black uppercase border border-black/10 bg-[#F8F9FA] px-2.5 py-1 rounded-full text-black/70">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hours completed */}
                      <div>
                        <h4 className="text-[#0038FF] text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                          <FaHourglassHalf /> Course Time
                        </h4>
                        <p className="text-black/70 text-xs font-bold">
                          {activeItem.hours} completed
                        </p>
                      </div>
                    </div>

                    {/* Footer / View Certificate Trigger */}
                    <div className="px-8 py-5 bg-[#F8F9FA] border-t-2 border-black flex items-center justify-between text-xs font-bold text-black/50">
                      <span>ID: {activeItem.id}</span>
                      <button
                        onClick={() => setShowPdf(true)}
                        className="flex items-center gap-1.5 text-black hover:text-[#0038FF] transition-colors cursor-pointer uppercase font-black tracking-wider"
                      >
                        View Certificate <FaExternalLinkAlt className="w-3 h-3 text-[#0038FF]" />
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
