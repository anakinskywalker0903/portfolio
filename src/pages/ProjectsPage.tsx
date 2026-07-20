import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaPuzzlePiece, FaLightbulb } from 'react-icons/fa';

const projectCaseStudies = [
  {
    title: 'NoteLift',
    subtitle: 'Chrome Extension for Highlight Extraction & Revision Notes',
    tags: ['JavaScript (ES6)', 'Chrome Extensions API', 'Local Storage', 'Manifest V3'],
    role: 'Concept, Architecture & Logic Design (AI-assisted syntax & implementation)',
    timeline: '2025',
    problem: 'Students face friction extracting and organizing text highlights from PDFs and web articles into clean study sheets without subscription accounts or cloud dependencies.',
    research: 'Studied context-menu text selection event models, DOM Range APIs, and local storage limits, designing a local-first offline database layout.',
    architecture: 'Local-only Chrome Extension architecture utilizing Manifest V3 background scripts, content scripts injection, and client popup interface.',
    features: [
      'Extract highlighted page selections instantly via context menus.',
      'Organize notes into custom modules and subjects lists.',
      '100% offline, local-first data model with zero cloud databases dependencies.',
      'Export gathered summaries instantly as clean Markdown or TXT files.',
    ],
    challenges: 'Capturing text selections reliably across cross-origin iframe documents without triggering browser security blocks.',
    lessons: 'Programmed strict validation listeners on window bounds and fallback handlers on parent containers to safely retrieve text selections on complex sites.',
    demoUrl: 'https://chromewebstore.google.com', // Replace with direct store URL if needed
    githubUrl: 'https://github.com/anakinskywalker0903/notelift',
    metrics: { count: 'SHIPPED', label: 'Live on Chrome Web Store' },
  },
  {
    title: 'Brainstormzz',
    subtitle: 'AI-Powered Collaborative Idea Whiteboard',
    tags: ['React 18', 'Tailwind CSS', 'HTML5 Canvas', 'OpenAI API', 'Vite'],
    role: 'Concept, UI Design & Canvas Logic (AI-assisted execution)',
    timeline: '2025',
    problem: 'Standard brainstorming tools lack visual layout grids, requiring manual translation from dry AI text prompt completions into structured flowchart blocks.',
    research: 'Developed dynamic node-drawing logic on HTML5 Canvas. Switched from Chrome Gemini Nano local API to OpenAI API post-hackathon for processing quality.',
    architecture: 'Client-side React 18 application integrating HTML5 Canvas event triggers and a secure Node.js routing server query framework.',
    features: [
      'Single prompt turns into 6 categorized visual suggestion blocks.',
      'Interactive infinite whiteboard-style Canvas drawing space.',
      'Instant summarize, translate, and expand buttons.',
      'Paid cloud OpenAI API integration for stable data parsing.',
    ],
    challenges: 'OpenAI API completion responses occasionally drifted from the rigid JSON schema template, crashing the node-drawing scripts.',
    lessons: 'Configured strict JSON schemas inside system prompts parameters to guarantee returned AI outputs map correctly to frontend canvas coordinates.',
    demoUrl: 'https://brainstormzz.vercel.app', // Update if live
    githubUrl: 'https://github.com/anakinskywalker0903/brainstormzz',
    metrics: { count: 'GPT-4o', label: 'AI Generation Core' },
  },
  {
    title: 'AI Career Engine',
    subtitle: 'Resume Analyzer & Career Matching Hub',
    tags: ['React 18', 'Node.js', 'Express', 'Anthropic Claude API', 'pdfjs-dist', 'Railway'],
    role: 'Full-Stack Layouts, Backend Logic Scoping (AI-assisted implementation)',
    timeline: '2025',
    problem: 'Job seekers lack direct, quantitative evaluations of how their resumes match target job openings and lack custom roadmap learning objectives.',
    research: 'Studied PDF binary extraction streams and programmed a custom resume evaluation formula (50% skill overlap + 50% personality indicators alignment).',
    architecture: 'Vite/React client deployed on Vercel connecting to a Node.js/Express backend service hosted on Railway using Claude API pipelines.',
    features: [
      'Discovery Mode: Personality quiz + Resume → Top 3 career role matches.',
      'Optimization Mode: Resume + Job Desc → Match percentage and gaps checklist.',
      'Generates a personalized, step-by-step 12-week skills roadmap.',
      'Local PDF parsing via client-side pdfjs-dist buffer loaders.',
    ],
    challenges: 'Parsing multi-column structured PDF resumes resulted in scrambled text coordinates, distorting key skill terms extraction.',
    lessons: 'Implemented character token cleaning algorithms on raw text streams to preserve structural layouts context before AI analysis.',
    demoUrl: 'https://careerengine.vercel.app', // Update if live
    githubUrl: 'https://github.com/anakinskywalker0903/career-engine',
    metrics: { count: 'CLAUDE', label: 'AI Processing Engine' },
  },
  {
    title: 'SSB Practice Simulator',
    subtitle: 'Services Selection Board timed exam simulator',
    tags: ['React', 'Vercel', 'Custom Timer Loops', 'UX Design'],
    role: 'Core Timer Logic, Test-Flow Algorithms (AI-assisted styling blocks)',
    timeline: '2025',
    problem: 'SSB aspirants struggle to train for timed psychological screenings (WAT, PPDT, SRT) due to a lack of realistic, time-restricted simulation environments.',
    research: 'Analyzed Services Selection Board official timings rules and designed distraction-free keyboard shortcuts arrays.',
    architecture: 'React-rendered browser flow utilizing synchronous timer states and asset preload arrays.',
    features: [
      'Realistic Word Association (WAT) & Situation Reaction (SRT) timed simulators.',
      'Picture Perception & Description Test (PPDT) image simulation.',
      'Fullscreen UI mode to match testing center constraints.',
      'Randomized, no-repeat image and word banks logic.',
    ],
    challenges: 'Programmatic timing loops would occasionally drift on older browsers, desynchronizing the slide updates.',
    lessons: 'Refactored timing calculations to reference absolute browser timestamps offsets rather than standard setInterval loops.',
    demoUrl: 'https://ssbsimulator.vercel.app',
    githubUrl: 'https://github.com/anakinskywalker0903/ssb-simulator',
    metrics: { count: '100%', label: 'Exam Timer Accuracy' },
  },
  {
    title: 'InstaSave Navigator',
    subtitle: 'Chrome Extension for Archive Navigation (Development Paused)',
    tags: ['JavaScript (ES6)', 'Chrome Extensions API', 'DOM Observers'],
    role: 'Concept & Viewport DOM Logic (AI-assisted implementation)',
    timeline: '2025',
    problem: 'Instagram does not provide an option to sort saved bookmarks chronologically, forcing users to scroll endlessly to access early saves.',
    research: 'Studied Instagram dynamic feed container IDs and analyzed infinite scrolling DOM nodes extensions.',
    architecture: 'Manifest V3 Chrome Extension inject content script tracking scrolling heights and bookmark offsets.',
    features: [
      'One-click navigation path to the oldest saved bookmark page.',
      'Automated scroll container tracking observer scripts.',
    ],
    challenges: 'Instagram anti-bot automation algorithms flag and block fast programmatic scroll adjustments.',
    lessons: 'Development paused (~7 months ago) due to Instagram platform anti-automation blocks; framed as a platform-imposed barrier.',
    demoUrl: '#',
    githubUrl: 'https://github.com/anakinskywalker0903/instasave-navigator',
    metrics: { count: 'PAUSED', label: 'Blocked by Anti-Bot Rules' },
  },
  {
    title: 'RailDost',
    subtitle: 'Indian Railways Route Visualizer (Development Paused)',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Leaflet.js'],
    role: 'Concept & Mapping Coordinates Integrations (AI-assisted)',
    timeline: '2025',
    problem: 'Travelers lack an interactive route visualizer showing transit overlay comparisons for multi-leg railway routes.',
    research: 'Analyzed geoJSON track coordinates systems and Leaflet.js route polyline draws.',
    architecture: 'Client-side mapping interface drawing polyline geoJSON coordinate arrays over Leaflet.js canvases.',
    features: [
      'Comparative travel times display overlay meters.',
      'Hardcoded route samples fallback mapping (after API pull).',
    ],
    challenges: 'No stable public Indian Railways data source; the free third-party routing API was pulled by its creator.',
    lessons: 'Configured hardcoded station arrays to maintain visual integrity; paused development until a stable routing feed becomes available.',
    demoUrl: '#',
    githubUrl: 'https://github.com/anakinskywalker0903/raildost',
    metrics: { count: 'PAUSED', label: 'API Revoked by Provider' },
  }
];

export function ProjectsPage() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const project = projectCaseStudies[activeProjectIdx];

  return (
    <div className="w-full min-h-screen bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 border-b border-black/5 pb-8">
          <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            CASE STUDIES
          </span>
          <h2
            className="text-[clamp(3rem,8vw,80px)] font-black leading-none tracking-tighter text-black uppercase"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            ENGINEERING<br />
            <span className="text-[#0038FF]">PROJECTS</span>
          </h2>
          <p className="text-black/50 text-sm max-w-md font-medium leading-relaxed mt-4">
            Deep dive case studies detailing design decisions, architectural parameters, real-world hurdles, and lessons learned.
          </p>
        </div>

        {/* Case Study Card with Dynamic Slide Transition */}
        <div className="relative">
          
          {/* Circular Selector row just above the card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 px-2">
            <span className="text-[10px] font-black uppercase text-black/40 tracking-wider">
              Project Case Study (0{activeProjectIdx + 1} / 0{projectCaseStudies.length})
            </span>
            <div className="flex flex-wrap gap-2">
              {projectCaseStudies.map((_, index) => {
                const isActive = activeProjectIdx === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveProjectIdx(index)}
                    className={`w-11 h-11 rounded-full border-2 flex items-center justify-center text-xs font-black transition-all cursor-pointer ${
                      isActive
                        ? 'bg-black text-[#CCFF00] border-black shadow-[2px_2px_0_#0038FF] -translate-x-0.5 -translate-y-0.5'
                        : 'bg-white/40 backdrop-blur-sm text-black border-black/10 hover:border-black hover:bg-white'
                    }`}
                  >
                    0{index + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="bg-white/60 backdrop-blur-md border-[3px] border-black rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#0038FF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-black p-8 bg-[#0038FF]/5 gap-4">
                <div>
                  <h3 className="text-2xl font-black text-black uppercase leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-black/60 text-xs font-black uppercase tracking-wider mt-1">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border-2 border-black rounded-full text-xs font-black uppercase tracking-wider bg-white hover:bg-black hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <FaGithub /> Repo
                  </a>
                  {project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 border-2 border-black rounded-full text-xs font-black uppercase tracking-wider bg-[#CCFF00] hover:bg-black text-black hover:text-white flex items-center gap-1.5 transition-colors shadow-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Grid content */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Left col: Tech stats, Role, Timeline */}
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] font-black text-black/40 uppercase tracking-widest block mb-1">
                      Role &amp; Timeline
                    </span>
                    <p className="text-xs font-black uppercase text-black leading-snug">{project.role}</p>
                    <span className="text-xs font-black text-[#0038FF] tracking-wider block mt-1">{project.timeline}</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-black/40 uppercase tracking-widest block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(t => (
                        <span key={t} className="text-[9px] font-black uppercase border border-black/10 bg-white/60 px-2.5 py-1 rounded-full text-black/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Card */}
                  <div className="bg-[#1E2026] text-white p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden border-2 border-black">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                    <span className="text-[9px] font-black text-[#CCFF00] tracking-widest uppercase block mb-1">
                      {project.metrics.label}
                    </span>
                    <span className="text-2xl font-black">{project.metrics.count}</span>
                  </div>
                </div>

                {/* Right col: Case details */}
                <div className="md:col-span-2 flex flex-col gap-6">
                  {/* Problem & Research */}
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-1 border border-red-200">
                      <FaChartLine className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-black text-sm uppercase tracking-wider">The Problem &amp; Research</h4>
                      <p className="text-black/70 text-xs font-medium leading-relaxed mt-1.5">{project.problem}</p>
                      <p className="text-black/60 text-[11px] font-medium leading-relaxed mt-2 italic">{project.research}</p>
                    </div>
                  </div>

                  {/* Architecture & Features */}
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0038FF] flex items-center justify-center flex-shrink-0 mt-1 border border-blue-200">
                      <FaPuzzlePiece className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-black text-sm uppercase tracking-wider">Architecture &amp; Features</h4>
                      <p className="text-black/70 text-xs font-medium leading-relaxed mt-1.5">{project.architecture}</p>
                      <ul className="flex flex-col gap-1.5 mt-3 text-xs text-black/80 font-bold">
                        {project.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0038FF] mt-1.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Key Hurdles & Lessons */}
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 mt-1 border border-yellow-200">
                      <FaLightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-black text-black text-sm uppercase tracking-wider">Key Hurdles &amp; Lessons</h4>
                      <p className="text-black/70 text-xs font-medium leading-relaxed mt-1.5">
                        <strong className="text-black">The Hurdle:</strong> {project.challenges}
                      </p>
                      <p className="text-black/70 text-xs font-medium leading-relaxed mt-2">
                        <strong className="text-[#0038FF]">The Solution:</strong> {project.lessons}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.article>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
