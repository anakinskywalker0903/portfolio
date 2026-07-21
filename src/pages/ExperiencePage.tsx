import { motion } from 'motion/react';
import { FaCalendarAlt, FaAward } from 'react-icons/fa';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'AKS Ecosystem (aksecosystem.in)',
    period: 'May 31, 2026 — Present',
    type: 'Internship (Ecosystem Frontend)',
    highlights: [
      'Engineering the responsive landing portal and core dashboard interfaces for the AKS product ecosystem, handling multiple simultaneous web projects.',
      'Developed core frontend versions for Upsilon and Upsilon Landing sites using React and Tailwind CSS, designing custom configuration themes and spacing rules.',
      'Configured Google Cloud Console OAuth authentication credentials, client IDs, and redirect URI handlers for aksquestion.',
      'Constructed database schemas, established tables, and mapped NeonDB PostgreSQL connection adapters.',
      'Collaborate daily within a team of 4 tech developers, reporting directly to the Tech Lead and coordinating requirements updates.',
    ],
    tags: ['React', 'Tailwind CSS', 'PostgreSQL', 'Vite', 'Google Console', 'Git'],
  }
];

export function ExperiencePage() {
  return (
    <div className="w-full min-h-screen bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] pt-32 pb-24 px-6 md:px-10 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-12 border-b border-black/5 pb-8">
          <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            WORK TIMELINE
          </span>
          <h2
            className="text-[clamp(3rem,8vw,80px)] font-black leading-none tracking-tighter text-black uppercase"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            CAREER &amp;<br />
            <span className="text-[#0038FF]">EXPERIENCE</span>
          </h2>
          <p className="text-black/50 text-sm max-w-md font-medium leading-relaxed mt-4">
            A chronological timeline of roles, core responsibilities, and quantified engineering achievements.
          </p>
        </div>

        {/* Timeline list - Single card layout matching rest of theme */}
        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="border-[3px] border-black rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0px_0px_#000000] hover:shadow-[12px_12px_0px_0px_#0038FF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white/60 backdrop-blur-md p-8 md:p-10 flex flex-col gap-6"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 pb-6">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#0038FF] mb-1.5 block">
                    {exp.type}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-none text-black">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-black uppercase tracking-wider text-black/50 block mt-1.5">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-black/60 bg-black/5 px-4 py-2 rounded-full border border-black/5 w-fit h-fit flex-shrink-0">
                  <FaCalendarAlt className="w-3.5 h-3.5 text-[#0038FF]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="flex flex-col gap-4">
                <span className="text-[9.5px] font-black text-[#0038FF] tracking-widest uppercase block mb-1">
                  Key Achievements & Responsibilities
                </span>
                <ul className="flex flex-col gap-3 text-xs md:text-sm text-black/70 font-medium leading-relaxed">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaAward className="w-4.5 h-4.5 text-[#0038FF] mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools footer */}
              <div className="flex flex-wrap gap-1.5 mt-4 pt-6 border-t border-black/5">
                {exp.tags.map(t => (
                  <span key={t} className="text-[9px] font-black uppercase border border-black/10 bg-white/80 px-2.5 py-1 rounded-full text-black/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
