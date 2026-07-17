import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaAward, FaHourglassHalf, FaCompass, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const archiveItems = [
  {
    id: 'AWS-DEV-2024',
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    year: '2024',
    icon: '☁️',
    hours: '45 hours',
    desc: 'Associate-level certification covering AWS deployment, security pipelines, and cloud-native architecture.',
    learnt: 'IAM policies, serverless Lambdas, API Gateway, DynamoDB indexing, ECS container deployment, CloudFormation templating.',
    skills: ['AWS Lambda', 'DynamoDB', 'Cloud Security', 'Containerization'],
  },
  {
    id: 'META-REACT-2023',
    name: 'Meta React Developer',
    issuer: 'Meta / Coursera',
    year: '2023',
    icon: '⚛️',
    hours: '120 hours',
    desc: 'Professional front-end certification focused on production React concepts, state management, testing, and UX interfaces.',
    learnt: 'React hooks mechanics, context management, Jest unit testing, React Testing Library, responsive design grids, profiling components.',
    skills: ['React Hooks', 'Jest & RTL', 'Component Design', 'Lighthouse Optimization'],
  },
  {
    id: 'GOOG-UX-2023',
    name: 'Google UX Design',
    issuer: 'Google / Coursera',
    year: '2023',
    icon: '🎨',
    hours: '180 hours',
    desc: 'End-to-end user experience certification detailing research methodologies, wireframing, interactive prototyping, and handoff standards.',
    learnt: 'User personas, empathy maps, low/high fidelity wireframing (Figma), usability tests, WCAG AA accessibility compliance, responsive interface design.',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Figma auto-layout'],
  },
  {
    id: 'MDB-DEV-2022',
    name: 'MongoDB Developer',
    issuer: 'MongoDB University',
    year: '2022',
    icon: '🍃',
    hours: '30 hours',
    desc: 'Specialized document database course covering performance structures, schema validation, and pipeline analytics.',
    learnt: 'Document schema design patterns, complex aggregation queries, performance profiling with indexing, transaction ACID management.',
    skills: ['NoSQL Schemas', 'Aggregation Pipelines', 'Query Profiling', 'Scaling Database Indexes'],
  },
  {
    id: 'MS-TS-2022',
    name: 'TypeScript Professional',
    issuer: 'Microsoft / LinkedIn Learning',
    year: '2022',
    icon: '🔷',
    hours: '25 hours',
    desc: 'Advanced type-safety systems, code refactoring, compiler configuration, and design pattern scaling.',
    learnt: 'Conditional and mapped types, utility helpers, interface generics, custom decorators, code transpilation options.',
    skills: ['Generics & Utility Types', 'Transpilation Configuration', 'Decorators', 'Strict Type Guards'],
  },
];

export function LearningArchivePage() {
  const [activeItem, setActiveItem] = useState<typeof archiveItems[0] | null>(null);

  // Group items by year
  const groupedItems = archiveItems.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {} as Record<string, typeof archiveItems>);

  // Sort years descending
  const years = Object.keys(groupedItems).sort((a, b) => b.localeCompare(a));

  return (
    <div className="w-full min-h-screen bg-white pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            CERTIFICATIONS
          </span>
          <h2
            className="text-[clamp(3rem,8vw,80px)] font-black leading-none tracking-tighter text-black uppercase"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            LEARNING<br />
            <span className="text-[#0038FF]">ARCHIVE</span>
          </h2>
          <p className="text-black/50 text-sm max-w-md font-medium leading-relaxed mt-4">
            Click on any credential card to explore details regarding hours, curriculum covered, skills gained, and verification ids.
          </p>
        </div>

        {/* Grouped Timeline */}
        <div className="flex flex-col gap-12">
          {years.map((year) => (
            <div key={year} className="flex flex-col md:flex-row gap-6 border-t-2 border-black/10 pt-8">
              {/* Year marker */}
              <div className="w-24 flex-shrink-0">
                <span className="text-3xl font-black text-black select-none tracking-tight block">
                  {year}
                </span>
                <span className="inline-block mt-1 text-[9px] font-black text-[#0038FF] uppercase tracking-widest">
                  {groupedItems[year].length} Credentials
                </span>
              </div>

              {/* Grid of items */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {groupedItems[year].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className="text-left bg-[#F8F9FA] hover:bg-white border-2 border-transparent hover:border-black rounded-3xl p-6 transition-all duration-300 flex items-start gap-4 shadow-sm group"
                  >
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-black text-sm uppercase leading-tight truncate group-hover:text-[#0038FF] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-black/50 text-[10px] font-bold uppercase tracking-wider mt-1 truncate">
                        {item.issuer}
                      </p>
                      <span className="inline-block mt-3 text-[9px] font-black uppercase bg-[#0038FF]/5 text-[#0038FF] px-2 py-0.5 rounded-full border border-[#0038FF]/10">
                        {item.hours}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
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
                onClick={() => setActiveItem(null)}
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 16 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative w-full max-w-lg bg-white border-[3px] border-black rounded-[2.5rem] shadow-2xl overflow-hidden z-10 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b-2 border-black bg-[#CCFF00]/10">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">{activeItem.icon}</span>
                    <div>
                      <h3 className="font-black text-lg text-black uppercase leading-tight">
                        {activeItem.name}
                      </h3>
                      <span className="text-[10px] font-black uppercase text-black/50 tracking-wider">
                        {activeItem.issuer} • {activeItem.year}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
                  >
                    <IoClose className="w-4 h-4" />
                  </button>
                </div>

                {/* Details */}
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
                      {activeItem.skills.map((s, i) => (
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

                {/* Footer / ID Action */}
                <div className="px-8 py-5 bg-[#F8F9FA] border-t-2 border-black flex items-center justify-between text-xs font-bold text-black/50">
                  <span>ID: {activeItem.id}</span>
                  <button
                    onClick={() => window.open('#', '_blank')}
                    className="flex items-center gap-1.5 text-black hover:text-[#0038FF] transition-colors"
                  >
                    Verify Credential <FaExternalLinkAlt className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
