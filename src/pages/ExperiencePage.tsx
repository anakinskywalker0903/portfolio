import { motion } from 'motion/react';
import { NumberTicker } from '@/components/ui/number-ticker';
import { FaBriefcase, FaCalendarAlt, FaAward } from 'react-icons/fa';

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    period: '2023 — Present',
    type: 'Full-time',
    highlights: [
      'Led frontend architecture for a SaaS platform serving 50k+ active users, ensuring 99.9% client-side stability.',
      'Designed and engineered a shared modular component library, reducing interface development cycles by 35%.',
      'Optimized Core Web Vitals, raising Lighthouse performance scores from a baseline of 62 to an average of 98.',
      'Mentored and onboarded 4 junior developers on TypeScript coding patterns and React state practices.',
    ],
    tags: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Vite'],
    color: '#CCFF00',
  },
  {
    role: 'Full Stack Developer',
    company: 'Startup Studio',
    period: '2022 — 2023',
    type: 'Full-time',
    highlights: [
      'Built and shipped 3 production-grade client apps from specification stage to launch.',
      'Architected JSON REST APIs with Node.js and PostgreSQL, implementing structured indexes that reduced fetch times.',
      'Designed and implemented responsive web layouts using Figma components and Tailwind utility libraries.',
      'Managed continuous integration pipelines, streamlining automated staging deployments.',
    ],
    tags: ['Node.js', 'React', 'PostgreSQL', 'Tailwind', 'Docker'],
    color: '#CCFF00',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency XYZ',
    period: '2021 — 2022',
    type: 'Full-time',
    highlights: [
      'Constructed pixel-perfect landing grids and custom Shopify themes for 15+ international clients.',
      'Upgraded legacy jQuery files to React, improving local code modularity and file maintainability.',
      'Introduced Vite and TypeScript build routines, decreasing developer compile times by 60%.',
      'Implemented full WCAG AA accessibility compliance across consumer-facing checkout pages.',
    ],
    tags: ['React', 'Sass', 'Figma', 'Vite', 'Shopify'],
    color: '#0038FF',
  },
];

export function ExperiencePage() {
  return (
    <div className="w-full min-h-screen bg-[#0038FF] text-white pt-32 pb-24 px-6 md:px-10 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block bg-white/20 text-white font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-white/30">
            WORK TIMELINE
          </span>
          <h2
            className="text-[clamp(3rem,8vw,80px)] font-black leading-none tracking-tighter text-white uppercase"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            CAREER &amp;<br />
            <span className="text-[#CCFF00]">EXPERIENCE</span>
          </h2>
          <p className="text-white/60 text-sm max-w-md font-medium leading-relaxed mt-4">
            A chronological timeline of roles, core responsibilities, and quantified engineering achievements.
          </p>
        </div>

        {/* Quantified highlights (using NumberTicker!) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-black/20 border-2 border-white/10 rounded-3xl p-6 text-center backdrop-blur-md">
            <span className="text-[10px] font-black text-[#CCFF00] tracking-wider uppercase block mb-1">
              Active Users Served
            </span>
            <div className="text-3xl font-black flex items-center justify-center gap-1">
              <NumberTicker value={50} className="text-white" />
              <span>k+</span>
            </div>
          </div>
          <div className="bg-black/20 border-2 border-white/10 rounded-3xl p-6 text-center backdrop-blur-md">
            <span className="text-[10px] font-black text-[#CCFF00] tracking-wider uppercase block mb-1">
              Product Launches
            </span>
            <div className="text-3xl font-black flex items-center justify-center gap-1">
              <NumberTicker value={20} className="text-white" />
              <span>+</span>
            </div>
          </div>
          <div className="bg-black/20 border-2 border-white/10 rounded-3xl p-6 text-center backdrop-blur-md">
            <span className="text-[10px] font-black text-[#CCFF00] tracking-wider uppercase block mb-1">
              Build Speedup
            </span>
            <div className="text-3xl font-black flex items-center justify-center gap-1">
              <NumberTicker value={4} className="text-white" />
              <span>x</span>
            </div>
          </div>
        </div>

        {/* Timeline list */}
        <div className="flex flex-col gap-10 relative pl-6 border-l-2 border-white/15">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[33px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#CCFF00] border-[3px] border-[#0038FF] shadow-lg flex-shrink-0" />

              <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight leading-none text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00] mt-1 block">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold text-white/50 bg-white/5 px-4 py-2 rounded-full border border-white/5 w-fit">
                    <FaCalendarAlt className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] font-black text-[#CCFF00] tracking-widest uppercase block mb-1">
                    Key Achievements
                  </span>
                  <ul className="flex flex-col gap-2 text-xs text-white/80 font-bold leading-relaxed">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <FaAward className="w-3.5 h-3.5 text-[#CCFF00] mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools footer */}
                <div className="flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-white/10">
                  {exp.tags.map(t => (
                    <span key={t} className="text-[9px] font-black uppercase border border-white/10 bg-white/5 px-2.5 py-1 rounded-full text-white/85">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
