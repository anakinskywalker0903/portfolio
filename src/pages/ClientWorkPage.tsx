import { motion } from 'motion/react';
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
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop', // Luxury interior showcase placeholder image
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'UI Redesign', 'Domain Management', 'Hostinger'],
    links: [
      { label: 'devinterio.com', url: 'https://devinterio.com' },
      { label: 'devinterio.in', url: 'https://devinterio.in' }
    ]
  }
];

export function ClientWorkPage() {
  return (
    <div className="w-full min-h-screen bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
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

        {/* Clients Stack */}
        <div className="flex flex-col gap-12">
          {clientEngagements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col lg:flex-row border-[3px] border-black rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#0038FF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white/60 backdrop-blur-md"
            >
              {/* Left Side: Thumbnail & Summary */}
              <div className="w-full lg:w-[360px] flex-shrink-0 relative h-64 lg:h-auto min-h-[300px] border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black">
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end text-white">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#CCFF00] mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-black text-2xl uppercase leading-none mb-2">
                    {item.name}
                  </h3>
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
                        — Devinterio Management Team
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
                    {item.links.map(l => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[9.5px] font-black uppercase tracking-wider bg-[#CCFF00] border-2 border-black px-3.5 py-1.5 rounded-full text-black hover:bg-black hover:text-[#CCFF00] transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <FaExternalLinkAlt className="w-2.5 h-2.5" /> {l.label}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
