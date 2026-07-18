import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaAward, FaHourglassHalf, FaCompass, FaExternalLinkAlt, FaBookOpen } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const archiveItems = [
  {
    id: 'ORACLE-JAVA-2026',
    name: 'Oracle Certified Associate, Java SE 8 Programmer / Foundations',
    issuer: 'Oracle University',
    year: '2026',
    icon: '☕',
    hours: '40 hours',
    category: 'professional',
    desc: 'Demonstrates foundational knowledge of Java technology and programming, covering core concepts, data structures, and OOP methodologies.',
    learnt: 'Java syntax, object-oriented concepts (inheritance, encapsulation, polymorphism), control flow structures, exception handling, data structures, and APIs.',
    skills: ['Java', 'OOP', 'Data Structures', 'Exception Handling'],
    verifyUrl: 'https://education.oracle.com',
  },
  {
    id: 'AWS-DEV-2024',
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    year: '2024',
    icon: '☁️',
    hours: '45 hours',
    category: 'professional',
    desc: 'Associate-level certification covering AWS deployment, security pipelines, and cloud-native architecture.',
    learnt: 'IAM policies, serverless Lambdas, API Gateway, DynamoDB indexing, ECS container deployment, CloudFormation templating.',
    skills: ['AWS Lambda', 'DynamoDB', 'Cloud Security', 'Containerization'],
    verifyUrl: 'https://aws.amazon.com/verification',
  },
  {
    id: 'NPTEL-CLOUD-2026',
    name: 'Cloud Computing (12-Week Course)',
    issuer: 'NPTEL (IIT Kharagpur)',
    year: '2026',
    icon: '🌥️',
    hours: '60 hours',
    category: 'academic',
    desc: 'A rigorous academic course covering the fundamental design, models, resource virtualization, and architecture of cloud infrastructure.',
    learnt: 'Cloud design models, SaaS/PaaS/IaaS setups, hypervisors, resource allocation, storage virtualization, MapReduce frameworks.',
    skills: ['Cloud Architecture', 'Virtualization', 'Resource Scheduling', 'MapReduce'],
    verifyUrl: 'https://nptel.ac.in',
  },
  {
    id: 'UMICH-AML-2026',
    name: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan / Coursera',
    year: '2026',
    icon: '🐍',
    hours: '40 hours',
    category: 'specialization',
    desc: 'Advanced machine learning course covering data analysis, predictive modeling, clustering, and deep evaluation strategies.',
    learnt: 'Supervised & unsupervised learning algorithms, scikit-learn interfaces, SVM regression, decision trees, cross-validation metrics.',
    skills: ['Python', 'Scikit-Learn', 'Feature Engineering', 'Model Evaluation'],
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 'META-REACT-2023',
    name: 'Meta React Developer',
    issuer: 'Meta / Coursera',
    year: '2023',
    icon: '⚛️',
    hours: '120 hours',
    category: 'specialization',
    desc: 'Professional front-end certification focused on production React concepts, state management, testing, and UX interfaces.',
    learnt: 'React hooks mechanics, context management, Jest unit testing, React Testing Library, responsive design grids, profiling components.',
    skills: ['React Hooks', 'Jest & RTL', 'Component Design', 'Lighthouse Optimization'],
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 'GOOG-UX-2023',
    name: 'Google UX Design',
    issuer: 'Google / Coursera',
    year: '2023',
    icon: '🎨',
    hours: '180 hours',
    category: 'specialization',
    desc: 'End-to-end user experience certification detailing research methodologies, wireframing, interactive prototyping, and handoff standards.',
    learnt: 'User personas, empathy maps, low/high fidelity wireframing (Figma), usability tests, WCAG AA accessibility compliance, responsive interface design.',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Figma auto-layout'],
    verifyUrl: 'https://coursera.org/verify',
  },
  {
    id: 'MDB-DEV-2022',
    name: 'MongoDB Developer',
    issuer: 'MongoDB University',
    year: '2022',
    icon: '🍃',
    hours: '30 hours',
    category: 'specialization',
    desc: 'Specialized document database course covering performance structures, schema validation, and pipeline analytics.',
    learnt: 'Document schema design patterns, complex aggregation queries, performance profiling with indexing, transaction ACID management.',
    skills: ['NoSQL Schemas', 'Aggregation Pipelines', 'Query Profiling', 'Scaling Database Indexes'],
    verifyUrl: 'https://learn.mongodb.com',
  },
  {
    id: 'MS-TS-2022',
    name: 'TypeScript Professional',
    issuer: 'Microsoft / LinkedIn Learning',
    year: '2022',
    icon: '🔷',
    hours: '25 hours',
    category: 'specialization',
    desc: 'Advanced type-safety systems, code refactoring, compiler configuration, and design pattern scaling.',
    learnt: 'Conditional and mapped types, utility helpers, interface generics, custom decorators, code transpilation options.',
    skills: ['Generics & Utility Types', 'Transpilation Configuration', 'Decorators', 'Strict Type Guards'],
    verifyUrl: 'https://www.linkedin.com/learning',
  },
];

const categories = [
  {
    key: 'professional',
    title: 'Professional Certifications',
    description: 'Industry-standard validations verifying production-grade competencies.',
  },
  {
    key: 'academic',
    title: 'University & Academic Learning',
    description: 'Rigorous computer science courses certified by leading universities.',
  },
  {
    key: 'specialization',
    title: 'Online Specializations',
    description: 'Advanced skill pathways in architecture, libraries, and design frameworks.',
  },
];

export function LearningArchivePage() {
  const [activeItem, setActiveItem] = useState<typeof archiveItems[0] | null>(null);

  return (
    <div className="w-full min-h-screen bg-white pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
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
            Click on any credential card to explore details regarding hours, curriculum covered, skills gained, and verification links.
          </p>
        </div>

        {/* Currently Learning Section */}
        <div className="mb-16 border-[3px] border-black rounded-[2.5rem] p-8 bg-black text-white relative overflow-hidden shadow-[8px_8px_0_#CCFF00]">
          {/* Decorative blur glow */}
          <div className="absolute right-0 top-0 w-48 h-48 bg-[#0038FF]/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1">
              <span className="inline-block bg-[#CCFF00] text-black font-black text-[9px] px-3.5 py-1 rounded-full mb-3 tracking-widest uppercase border border-black">
                CURRENT OBJECTIVES
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight" style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
                CURRENTLY LEARNING
              </h3>
              <p className="text-white/60 text-xs font-medium leading-relaxed mt-2 max-w-lg">
                Actively expanding computational engineering models, system design layers, and artificial intelligence frameworks.
              </p>
            </div>
            <div className="w-full md:w-auto flex-shrink-0 flex flex-col gap-2.5">
              {[
                'Modern Full-Stack Development',
                'Data Structures & Algorithms (Java)',
                'Artificial Intelligence & Agentic Workflows',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                  <span className="text-xs font-black uppercase tracking-wider text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Group list */}
        <div className="flex flex-col gap-16">
          {categories.map((cat) => {
            const items = archiveItems.filter((item) => item.category === cat.key);
            return (
              <div key={cat.key} className="flex flex-col gap-6 border-t-2 border-black/10 pt-10">
                <div>
                  <h3 className="text-xl font-black text-black uppercase tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-black/50 text-xs font-medium mt-1">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveItem(item)}
                      className="text-left bg-[#F8F9FA] hover:bg-white border-2 border-transparent hover:border-black rounded-3xl p-6 transition-all duration-300 flex items-start gap-4 shadow-sm group cursor-pointer"
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
            );
          })}
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
                      <h3 className="font-black text-sm text-black uppercase leading-tight max-w-[280px]">
                        {activeItem.name}
                      </h3>
                      <span className="text-[10px] font-black uppercase text-black/50 tracking-wider">
                        {activeItem.issuer} • {activeItem.year}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveItem(null)}
                    className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all flex-shrink-0"
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
                    onClick={() => window.open(activeItem.verifyUrl || '#', '_blank')}
                    className="flex items-center gap-1.5 text-black hover:text-[#0038FF] transition-colors cursor-pointer"
                  >
                    Preview Certificate <FaExternalLinkAlt className="w-3 h-3" />
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
