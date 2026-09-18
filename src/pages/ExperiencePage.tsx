import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FaBuilding, 
  FaHandshake, 
  FaFileAlt, 
  FaExternalLinkAlt, 
  FaArrowRight, 
  FaChartLine, 
  FaPuzzlePiece, 
  FaAward 
} from 'react-icons/fa';

import { useSEO } from '@/hooks/useSEO';
import internshipData from '@/data/experience.json';
import clientWorkData from '@/data/client-work.json';

const MOBILE_EXP_TABS = [
  { id: 'overview', label: '📋 Overview' },
  { id: 'responsibilities', label: '🛠️ Execution' },
  { id: 'achievements', label: '🏆 Victories' },
];

export function ExperiencePage() {
  useSEO('Experience', 'Review my professional timeline and work experience, including internships and freelance history.');
  const [activeCategory, setActiveCategory] = useState<'internship' | 'freelance'>('internship');
  const [activeExpIdx, setActiveExpIdx] = useState(0);
  const [activeMobileTab, setActiveMobileTab] = useState<'overview' | 'responsibilities' | 'achievements'>('overview');

  const currentDataset = activeCategory === 'internship' ? internshipData : clientWorkData;
  const activeExp: any = currentDataset[activeExpIdx] || currentDataset[0];

  const getExperienceStatus = (exp: any, category: 'internship' | 'freelance') => {
    if (category === 'internship') {
      return exp.duration?.toLowerCase().includes('present') ? 'ACTIVE' : 'COMPLETED';
    }
    if (exp.timeline?.toLowerCase().includes('development')) {
      return 'IN PROGRESS';
    }
    return 'LIVE';
  };

  const statusText = getExperienceStatus(activeExp, activeCategory);

  return (
    <div className="w-full min-h-screen bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] pt-24 sm:pt-32 pb-24 px-3 sm:px-6 md:px-20 lg:px-28 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-6 sm:mb-10 border-b border-black/5 pb-6">
          <span className="inline-block bg-[var(--c-accent)] text-black font-black text-xs px-3.5 py-1.5 rounded-full mb-3 tracking-widest uppercase border border-black shadow-sm">
            WORK TIMELINE
          </span>
          <h1
            className="text-[clamp(2.2rem,7vw,80px)] font-black leading-none tracking-tighter text-black uppercase"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            CAREER &amp;<br />
            <span className="text-[var(--c-accent-2)]">EXPERIENCE</span>
          </h1>
          <p className="text-black/50 text-xs sm:text-sm max-w-md font-medium leading-relaxed mt-3">
            A structured repository separating official internships from freelance client work with deep-dive dossier inspection.
          </p>
        </div>

        {/* Category Toggle Tabs (Internships vs Freelance) */}
        <div className="flex gap-3 mb-6 border-b border-black/10 pb-4">
          <button
            onClick={() => {
              setActiveCategory('internship');
              setActiveExpIdx(0);
              setActiveMobileTab('overview');
            }}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeCategory === 'internship'
                ? 'bg-black text-[var(--c-accent)] border-black shadow-[3px_3px_0_var(--c-accent-2)]'
                : 'bg-[var(--c-bg-surface)] text-black border-black/10 hover:border-black'
            }`}
          >
            <FaBuilding className="w-3.5 h-3.5" /> Internships ({internshipData.length})
          </button>
          <button
            onClick={() => {
              setActiveCategory('freelance');
              setActiveExpIdx(0);
              setActiveMobileTab('overview');
            }}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeCategory === 'freelance'
                ? 'bg-black text-[var(--c-accent)] border-black shadow-[3px_3px_0_var(--c-accent-2)]'
                : 'bg-[var(--c-bg-surface)] text-black border-black/10 hover:border-black'
            }`}
          >
            <FaHandshake className="w-3.5 h-3.5" /> Freelance ({clientWorkData.length})
          </button>
        </div>

        {/* Selector Row (Dots on Desktop, Swiper on Mobile) */}
        <div className="mb-6">
          {/* Mobile Horizontal Touch Swiper */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {currentDataset.map((exp: any, index: number) => {
              const isActive = activeExpIdx === index;
              const title = exp.company?.replace(/\s*\(.*\)/, '') || exp.client || exp.role;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveExpIdx(index);
                    setActiveMobileTab('overview');
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border-2 flex-shrink-0 ${
                    isActive
                      ? 'bg-black text-[var(--c-accent)] border-black shadow-[2px_2px_0_var(--c-accent-2)]'
                      : 'bg-[var(--c-bg-surface)] text-black border-black/10 hover:border-black'
                  }`}
                >
                  0{index + 1}. {title}
                </button>
              );
            })}
          </div>

          {/* Desktop Circular Selector Row (Managing space with Dots!) */}
          <div className="hidden lg:flex items-center justify-between gap-4 px-2">
            <span className="text-[10px] font-black uppercase text-black/40 tracking-wider">
              {activeCategory === 'internship' ? 'Internship Dossier' : 'Freelance Contract'} (0{activeExpIdx + 1} / 0{currentDataset.length})
            </span>
            <div className="flex flex-wrap gap-2">
              {currentDataset.map((_, index) => {
                const isActive = activeExpIdx === index;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveExpIdx(index);
                      setActiveMobileTab('overview');
                    }}
                    className={`w-11 h-11 rounded-full border-2 flex items-center justify-center text-xs font-black transition-all cursor-pointer ${
                      isActive
                        ? 'bg-black text-[var(--c-accent)] border-black shadow-[2px_2px_0_var(--c-accent-2)] -translate-x-0.5 -translate-y-0.5'
                        : 'bg-white/40 backdrop-blur-sm text-black border-black/10 hover:border-black hover:bg-white'
                    }`}
                  >
                    0{index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Unified Dossier Showcase Card */}
        <AnimatePresence mode="wait">
          {activeExp && (
            <motion.article
              key={`${activeCategory}-${activeExpIdx}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="bg-white/70 backdrop-blur-md border-[3px] border-black rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[8px_8px_0px_0px_var(--c-shadow)] hover:shadow-[12px_12px_0px_0px_var(--c-accent-2)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-black p-5 sm:p-8 bg-[var(--c-accent-2)]/5 gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-black uppercase leading-tight">
                    {activeExp.company?.replace(/\s*\(.*\)/, '') || activeExp.client}
                  </h3>
                  <p className="text-black/60 text-[11px] sm:text-xs font-black uppercase tracking-wider mt-1">
                    {activeExp.role} • {activeExp.type || activeExp.industry}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  {(activeExp.companyUrl || activeExp.links?.[0]?.url) && (
                    <a
                      href={activeExp.companyUrl || activeExp.links?.[0]?.url}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 sm:px-4 py-2 border-2 border-black rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[var(--c-accent)] hover:bg-black text-black hover:text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <FaExternalLinkAlt /> Visit Site
                    </a>
                  )}
                  {activeExp.offerLetter && (
                    <a
                      href={activeExp.offerLetter}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 sm:px-4 py-2 border-2 border-black rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[var(--c-bg-surface)] hover:bg-black hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FaFileAlt /> Offer Letter
                    </a>
                  )}
                  {activeExp.cert && (
                    <a
                      href={activeExp.cert}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 sm:px-4 py-2 border-2 border-black rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[var(--c-bg-surface)] hover:bg-black hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <FaAward /> Certificate
                    </a>
                  )}
                  {activeCategory === 'freelance' && (
                    <Link
                      to="/client-work"
                      className="px-3.5 sm:px-4 py-2 border-2 border-black rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-[var(--c-bg-surface)] hover:bg-black hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                    >
                      Detailed View <FaArrowRight />
                    </Link>
                  )}
                </div>
              </div>

              {/* Mobile Tab Control Bar */}
              <div className="lg:hidden flex items-center justify-around border-b-2 border-black bg-[var(--c-bg-surface)] p-2">
                {MOBILE_EXP_TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveMobileTab(tab.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all cursor-pointer ${
                      activeMobileTab === tab.id
                        ? 'bg-black text-[var(--c-accent)] border border-black shadow-sm'
                        : 'text-black/60 hover:text-black'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Mobile Tabbed View Content */}
              <div className="lg:hidden p-5">
                {activeMobileTab === 'overview' && (
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-200">
                        <FaChartLine className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-black text-black text-xs uppercase tracking-wider">The Mandate &amp; Scope</h4>
                        <p className="text-black/70 text-xs font-medium leading-relaxed mt-1">
                          {activeExp.description || activeExp.outcome}
                        </p>
                        {activeExp.responsibilities?.[0] && (
                          <div className="bg-[var(--c-accent-2)]/5 p-2.5 rounded-xl border border-black/5 mt-2">
                            <strong className="text-black uppercase text-[8.5px] block mb-0.5">Core Focus:</strong>
                            <p className="text-black/70 text-[11px] font-semibold italic">{activeExp.responsibilities[0]}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 border-t border-black/10 pt-3 text-xs">
                      <div>
                        <span className="text-[8.5px] font-black text-black/40 block uppercase">Role &amp; Duration</span>
                        <p className="font-extrabold text-black text-[11px]">{activeExp.role}</p>
                        <span className="text-[10px] font-black text-[var(--c-accent-2)]">{activeExp.duration || activeExp.timeline}</span>
                      </div>
                      <div>
                        <span className="text-[8.5px] font-black text-black/40 block uppercase">Status</span>
                        <p className="font-extrabold text-[var(--c-accent-2)] text-[11px] uppercase">{statusText}</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-[8.5px] font-black text-black/40 block uppercase mb-1.5">Technologies</span>
                      <div className="flex flex-wrap gap-1">
                        {(activeExp.technologies || activeExp.stack || []).map((t: string) => (
                          <span key={t} className="text-[8.5px] font-black uppercase border border-black/10 bg-[var(--c-bg-surface)] px-2 py-0.5 rounded-full text-black/70">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeMobileTab === 'responsibilities' && (
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 text-[var(--c-accent-2)] flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-200">
                        <FaPuzzlePiece className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-black text-black text-xs uppercase tracking-wider">Execution &amp; Responsibilities</h4>
                        <ul className="flex flex-col gap-2 mt-2">
                          {(activeExp.responsibilities || []).map((point: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-[11px] text-black/75 font-medium leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent-2)] mt-1.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeMobileTab === 'achievements' && (
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-yellow-200">
                        <FaAward className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-black text-black text-xs uppercase tracking-wider">Key Deliverables &amp; Victories</h4>
                        <ul className="flex flex-col gap-2 mt-2">
                          {(activeExp.achievements || activeExp.deliverables || []).map((ach: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-[11px] text-black/80 font-bold leading-relaxed">
                              <span className="text-[var(--c-accent-2)] font-black mr-0.5">✦</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                        {activeExp.challenges && (
                          <div className="bg-[var(--c-bg-surface)] rounded-xl p-3 border border-black/5 mt-3 flex flex-col gap-2">
                            <p className="text-black/75 text-xs font-medium leading-relaxed">
                              <strong className="text-black block mb-0.5 uppercase text-[9px]">The Hurdle:</strong> {activeExp.challenges}
                            </p>
                            <p className="text-black/75 text-xs font-medium leading-relaxed border-t border-black/5 pt-2">
                              <strong className="text-[var(--c-accent-2)] block mb-0.5 uppercase text-[9px]">The Lesson:</strong> {activeExp.lessons}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop 2-Column Full View Content (Matching ProjectsPage Layout!) */}
              <div className="hidden lg:grid p-8 grid-cols-3 gap-8">
                
                {/* Left col: Role, Timeline, Engagement, Technologies, Status Card */}
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] font-black text-black/40 uppercase tracking-widest block mb-1">
                      Role &amp; Timeline
                    </span>
                    <p className="text-xs font-black uppercase text-black leading-snug">{activeExp.role}</p>
                    <span className="text-xs font-black text-[var(--c-accent-2)] tracking-wider block mt-1">
                      {activeExp.duration || activeExp.timeline}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-black/40 uppercase tracking-widest block mb-1">
                      Engagement Type
                    </span>
                    <p className="text-[11px] font-bold text-black/70 leading-relaxed pr-1">
                      {activeExp.type || activeExp.industry}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-black/40 uppercase tracking-widest block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(activeExp.technologies || activeExp.stack || []).map((t: string) => (
                        <span key={t} className="text-[9px] font-black uppercase border border-black/10 bg-white/60 px-2.5 py-1 rounded-full text-black/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Card / Status Box (just like ProjectsPage!) */}
                  <div className="bg-[var(--c-panel-bg)] text-white p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden border-2 border-black mt-auto">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                    <span className="text-[9px] font-black text-[var(--c-accent)] tracking-widest uppercase block mb-1">
                      EXPERIENCE STATUS
                    </span>
                    <span className="text-2xl font-black uppercase tracking-widest">{statusText}</span>
                  </div>
                </div>

                {/* Right col: Mandate, Responsibilities, Deliverables */}
                <div className="col-span-2 flex flex-col gap-6">
                  {/* Mandate & Scope */}
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-1 border border-red-200">
                      <FaChartLine className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-black text-sm uppercase tracking-wider">The Mandate &amp; Scope</h4>
                      <p className="text-black/70 text-xs font-medium leading-relaxed mt-1.5">
                        {activeExp.description || activeExp.outcome}
                      </p>
                      {activeExp.responsibilities?.[0] && (
                        <div className="bg-[var(--c-accent-2)]/5 px-3 py-2 rounded-xl border border-black/5 mt-2.5">
                          <strong className="text-black uppercase text-[9px] block mb-0.5">Core Focus:</strong>
                          <p className="text-black/70 text-[11px] font-semibold italic">{activeExp.responsibilities[0]}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Core Responsibilities & Execution */}
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[var(--c-accent-2)] flex items-center justify-center flex-shrink-0 mt-1 border border-blue-200">
                      <FaPuzzlePiece className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-black text-sm uppercase tracking-wider">Core Responsibilities &amp; Execution</h4>
                      <ul className="flex flex-col gap-2 mt-2">
                        {(activeExp.responsibilities || []).map((point: string, i: number) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-black/75 font-medium leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent-2)] mt-1.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Deliverables & Key Victories */}
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center flex-shrink-0 mt-1 border border-yellow-200">
                      <FaAward className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-black text-sm uppercase tracking-wider">Key Deliverables &amp; Victories</h4>
                      <ul className="flex flex-col gap-2 mt-2">
                        {(activeExp.achievements || activeExp.deliverables || []).map((ach: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-black/80 font-bold leading-relaxed">
                            <span className="text-[var(--c-accent-2)] font-black mr-0.5">✦</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                      {activeExp.challenges && (
                        <div className="bg-[var(--c-bg-surface)] rounded-2xl p-4 border border-black/5 mt-3 flex flex-col gap-2.5">
                          <p className="text-black/75 text-xs font-medium leading-relaxed">
                            <strong className="text-black block mb-0.5 uppercase text-[9px]">The Hurdle:</strong> {activeExp.challenges}
                          </p>
                          <p className="text-black/75 text-xs font-medium leading-relaxed border-t border-black/5 pt-2">
                            <strong className="text-[var(--c-accent-2)] block mb-0.5 uppercase text-[9px]">The Solution &amp; Lesson:</strong> {activeExp.lessons}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </motion.article>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
