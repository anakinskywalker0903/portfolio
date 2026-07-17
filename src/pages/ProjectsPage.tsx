import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaPuzzlePiece, FaLightbulb } from 'react-icons/fa';

const projectCaseStudies = [
  {
    title: 'Personal Portfolio 2026',
    subtitle: 'High-Performance 3D Digital Product Hub',
    tags: ['React', 'Three.js', 'React-Three-Rapier', 'GSAP', 'Vite'],
    role: 'Lead Architect & Creative Developer',
    timeline: '2026',
    problem: 'Typical portfolios feel static and lack engineering character. Recruiter drop-offs are high because they fail to see interactive engineering competence within 15 seconds.',
    research: 'Studied gamification loops, interactive physics damping setups, and high-performance WebGL asset code-splitting (using dynamic imports and Lazy loading) to ensure sub-1 second initial paint speeds.',
    architecture: 'Uses Vite for bundler speeds, Tailwind CSS v4 for utility architecture, React Three Fiber for WebGL scene orchestration, and Rapier as a lightweight WASM-based physics engine.',
    features: [
      'Interactive 3D physics ID Card with collision bounds.',
      'GSAP-powered staggers with fluid, organic spring motions.',
      'Categorized tech stack gauges that animate on scroll intersections.',
      'Multi-version resume builder modal offering targeted document exports.',
    ],
    challenges: 'High-tension joint stretching during camera zoom adjustments caused the physics engine solver to crash and yield NaN coordinates, making the canvas disappear.',
    lessons: 'Solved joint crashes by initializing the rigid bodies hanging vertically straight down (matching local offset lengths to joint connection lengths) to ensure zero tension on mount.',
    demoUrl: 'https://rohitdubey.dev',
    githubUrl: 'https://github.com/anakinskywalker0903/portfolio',
    metrics: { count: '60fps', label: 'Consistent Performance' },
  },
  {
    title: 'SaaS Analytics Engine',
    subtitle: 'Real-Time Logging & Metrics Dashboard',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Express', 'Tailwind'],
    role: 'Full-Stack Developer',
    timeline: '2025',
    problem: 'Managing distributed logs across client nodes was chaotic, with standard dashboards lagging heavily during high-throughput metric aggregation cycles.',
    research: 'Evaluated SQL indexing models, time-series data partition systems, and optimized WebSockets state-merging structures on the frontend.',
    architecture: 'Next.js frontend connected to a Node.js gateway. PostgreSQL database runs partitioned schemas, and Express routers server aggregated caches.',
    features: [
      'Real-time streaming charts with dynamic metric aggregation filters.',
      'Partitioned document storage managing 100k+ logs daily.',
      'WebSockets engine synchronizing concurrent client updates.',
    ],
    challenges: 'High concurrency cycles caused the memory footprint to spike when concurrent logs overflowed the socket stream buffer.',
    lessons: 'Implemented a sliding window back-pressure controller and throttled log commits using sliding arrays to stabilize CPU consumption.',
    demoUrl: '#',
    githubUrl: '#',
    metrics: { count: '<120ms', label: 'API Response Time' },
  },
];

export function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
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
            Deep dive case studies covering structural design, performance metrics, key architectural hurdles, and lessons learned.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="flex flex-col gap-16">
          {projectCaseStudies.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border-[3px] border-black rounded-[2.5rem] overflow-hidden shadow-xl"
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
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border-2 border-black rounded-full text-xs font-black uppercase tracking-wider bg-[#CCFF00] hover:bg-black text-black hover:text-white flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
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
                        <span key={t} className="text-[9px] font-black uppercase border border-black/10 bg-[#F8F9FA] px-2.5 py-1 rounded-full text-black/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Card */}
                  <div className="bg-[#0038FF] text-white p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                    <span className="text-[9px] font-black text-[#CCFF00] tracking-widest uppercase block mb-1">
                      {project.metrics.label}
                    </span>
                    <span className="text-3xl font-black">{project.metrics.count}</span>
                  </div>
                </div>

                {/* Right col: Case details */}
                <div className="md:col-span-2 flex flex-col gap-6">
                  {/* Problem & Research */}
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-1">
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
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0038FF] flex items-center justify-center flex-shrink-0 mt-1">
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
                    <div className="w-8 h-8 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 mt-1">
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
          ))}
        </div>

      </div>
    </div>
  );
}
