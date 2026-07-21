import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaBriefcase, FaHandshake, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';

const clientEngagements = [
  {
    id: '01',
    name: 'Website Redesign & Rebuild',
    client: 'Devinterio',
    year: '2024',
    category: 'Frontend Engineering & UI Redesign',
    desc: 'Designed and engineered the complete visual redesign and code rebuild of the official web presence for Devinterio, a modern interior design studio. Handles catalog showcases with optimized layout flows.',
    requirements: 'Migrate a slow, outdated site template to a high-speed, luxury-focused custom portfolio catalog. The interface needed to feel premium, load image-heavy pages in under 1.5s, and adapt seamlessly to mobile viewports.',
    development: 'Programmed a lightweight structural foundation using clean HTML5 semantic nodes and vanilla CSS3 (Grid/Flexbox) layout logic. Wrote custom JavaScript controllers for gallery modals, active state filters, and contact forms. Configured multi-domain maps and DNS redirects across Hostinger platforms.',
    outcome: 'Successfully shipped paid client work, live and actively in use at devinterio.com / devinterio.in. Established ongoing post-launch maintenance SLA, resolving design and alignment updates on-demand.',
    testimonial: 'Rohit took full ownership of our website rebuild. The catalog loads incredibly fast, and he continues to support us with quick updates whenever we need them.',
    img: '/devinterio.png', // Redesigned site screenshot
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'UI Redesign', 'Domain Management', 'Hostinger'],
    links: [
      { label: 'devinterio.com', url: 'https://devinterio.com' },
      { label: 'devinterio.in', url: 'https://devinterio.in' }
    ],
    logo: '/devinterio-logo.png'
  },
  {
    id: '02',
    name: 'Visualization Portfolio Showcase',
    client: 'Jaas Visual',
    year: '2024 (Upcoming)',
    category: 'Frontend Architecture & CGI Showcase',
    desc: 'Engineering the official web showcase for Jaas Visual, a high-end 3D architectural visualization and rendering studio. Designed to stream high-definition architectural renders smoothly across all viewports.',
    requirements: 'Rebuild the studio’s portfolio from scratch, achieving photorealistic CGI rendering showcases that load instantly. Program layout frameworks that adapt fluidly, handling massive image assets without visual stutter.',
    development: 'Programmed responsive layouts using Syne & Inter CSS variables. Developed custom preloader layers, layout animations sheets, and lightweight navigation menus. Built modular PHP structure partials in preparation for backend deployment stages.',
    outcome: 'Upcoming release. Development build is fully complete on the frontend, with local layout previews successfully validated and remote domain settings configured.',
    testimonial: 'Rohit’s frontend implementation matches our design visions perfectly. The preloader sequences and fluid scrolling layouts bring our visualization works to life.',
    img: '/jaas.jpg', // Redesigned site screenshot
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Architectural CGI Showcase', 'Preloading Reels', 'UI Animations'],
    links: [
      { label: 'jaasvisual.com', url: '#' }
    ],
    logo: '/jaas-logo.png'
  }
];

export function ClientWorkPage() {
  const [activeClientIdx, setActiveClientIdx] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);
  const [previewTitle, setPreviewTitle] = useState('');

  const item = clientEngagements[activeClientIdx];

  return (
    <div className="w-full min-h-screen bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 border-b border-black/5 pb-8">
          <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            CLIENT PROJECTS
          </span>
          <h2
            className="text-[clamp(3rem,8vw,80px)] font-black leading-none tracking-tighter text-black uppercase"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            PROFESSIONAL<br />
            <span className="text-[#0038FF]">ENGAGEMENTS</span>
          </h2>
          <p className="text-black/50 text-sm max-w-md font-medium leading-relaxed mt-4">
            Paid freelance engagements built to address direct business problems, layout parameters, and post-launch updates.
          </p>
        </div>

        {/* Case Study Card with Dynamic Slide Transition */}
        <div className="relative">
          
          {/* Circular Selector row just above the card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 px-2">
            <span className="text-[10px] font-black uppercase text-black/40 tracking-wider">
              Client Engagement (0{activeClientIdx + 1} / 0{clientEngagements.length})
            </span>
            <div className="flex flex-wrap gap-2">
              {clientEngagements.map((_, index) => {
                const isActive = activeClientIdx === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveClientIdx(index)}
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
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col lg:flex-row border-[3px] border-black rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#0038FF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white/60 backdrop-blur-md"
            >
              {/* Left Side: Thumbnail & Summary */}
              <div
                onClick={() => {
                  setActiveScreenshot(item.img);
                  setPreviewTitle(`${item.client} Layout Preview`);
                }}
                className="w-full lg:w-[360px] flex-shrink-0 relative h-64 lg:h-auto min-h-[300px] border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black cursor-pointer overflow-hidden group/img"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                />
                
                {/* Visual Glass Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="bg-[#CCFF00] text-black border-2 border-black font-black text-xs px-4 py-2 rounded-full uppercase tracking-wider shadow-md">
                    🔍 Click to Preview
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end text-white">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#CCFF00] mb-1.5">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    {item.logo && (
                      <div className="w-8 h-8 rounded-lg bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-md">
                        <img src={item.logo} alt="Client Logo" className="w-full h-full object-contain" />
                      </div>
                    )}
                    <h3 className="font-black text-xl uppercase leading-none">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-white/70">
                    <span>{item.client}</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Case Study */}
              <div className="flex-1 p-8 flex flex-col gap-6 justify-between">
                
                {/* Info block */}
                <div className="flex flex-col gap-4">
                  {/* Summary */}
                  <p className="text-black/70 text-xs font-medium leading-relaxed">
                    {item.desc}
                  </p>

                  <hr className="border-black/5" />

                  {/* Requirements & Dev */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-black text-black text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                        <FaBriefcase className="text-[#0038FF]" /> Requirements
                      </h4>
                      <p className="text-black/60 text-[11px] font-medium leading-relaxed">
                        {item.requirements}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-black text-black text-xs uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                        <FaHandshake className="text-[#0038FF]" /> Tech Implementation
                      </h4>
                      <p className="text-black/60 text-[11px] font-medium leading-relaxed">
                        {item.development}
                      </p>
                    </div>
                  </div>

                  <hr className="border-black/5" />

                  {/* Testimonial block */}
                  <div className="bg-[#1E2026] text-white rounded-2xl p-5 border-2 border-black flex gap-3 items-start relative overflow-hidden shadow-md">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                    <FaQuoteLeft className="w-4 h-4 text-[#CCFF00] flex-shrink-0 mt-1" />
                    <div className="relative z-10">
                      <p className="text-white/80 text-[11px] font-medium italic leading-relaxed">
                        "{item.testimonial}"
                      </p>
                      <span className="text-[9.5px] font-black text-[#CCFF00] uppercase tracking-wider block mt-2.5">
                        — {item.client} Management Team
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer of the card */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-black/5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(t => (
                      <span key={t} className="text-[9px] font-black uppercase border border-black/10 bg-white/60 px-2.5 py-1 rounded-full text-black/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Link Row */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setActiveScreenshot(item.img);
                        setPreviewTitle(`${item.client} Layout Preview`);
                      }}
                      className="text-[9.5px] font-black uppercase tracking-wider bg-white border-2 border-black px-3.5 py-1.5 rounded-full text-black hover:bg-black hover:text-white transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
                    >
                      👁️ Preview Layout
                    </button>
                    {item.links.map(l => (
                      l.url !== '#' ? (
                        <a
                          key={l.label}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[9.5px] font-black uppercase tracking-wider bg-[#CCFF00] border-2 border-black px-3.5 py-1.5 rounded-full text-black hover:bg-black hover:text-[#CCFF00] transition-colors flex items-center gap-1 shadow-sm"
                        >
                          <FaExternalLinkAlt className="w-2.5 h-2.5" /> {l.label}
                        </a>
                      ) : (
                        <span
                          key={l.label}
                          className="text-[9.5px] font-black uppercase tracking-wider bg-[#CCFF00]/30 border-2 border-black/20 px-3.5 py-1.5 rounded-full text-black/40 flex items-center gap-1 select-none cursor-not-allowed"
                          title="Site launching soon"
                        >
                          ⏳ {l.label} (Soon)
                        </span>
                      )
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeScreenshot && (
        <div
          onClick={() => {
            setActiveScreenshot(null);
            setPreviewTitle('');
          }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={() => {
                setActiveScreenshot(null);
                setPreviewTitle('');
              }}
              className="absolute -top-12 right-0 text-white hover:text-[#CCFF00] font-black text-sm uppercase tracking-wider flex items-center gap-1 bg-black/40 px-3 py-1.5 rounded-full border border-white/20 cursor-pointer"
            >
              Close ✕
            </button>
            <img
              src={activeScreenshot}
              alt="Website Layout Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border-4 border-black shadow-2xl bg-zinc-900"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
            <p className="text-white/60 text-xs mt-4 font-bold uppercase tracking-wider pointer-events-none">
              {previewTitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
