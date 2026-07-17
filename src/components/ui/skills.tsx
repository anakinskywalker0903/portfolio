import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { AnimatedCircularProgressBar } from '@/components/ui/animated-circular-progress-bar';
import {
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiFigma, SiGithub, SiDocker,
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';

const skills = [
  { name: 'React',        level: 95, category: 'Frontend', Icon: SiReact,        color: '#61DAFB' },
  { name: 'TypeScript',   level: 90, category: 'Frontend', Icon: SiTypescript,   color: '#3178C6' },
  { name: 'Next.js',      level: 88, category: 'Frontend', Icon: SiNextdotjs,    color: '#000000' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', Icon: SiTailwindcss,  color: '#06B6D4' },
  { name: 'Node.js',      level: 85, category: 'Backend',  Icon: SiNodedotjs,    color: '#339933' },
  { name: 'Express',      level: 82, category: 'Backend',  Icon: SiExpress,      color: '#000000' },
  { name: 'PostgreSQL',   level: 78, category: 'Backend',  Icon: SiPostgresql,   color: '#4169E1' },
  { name: 'MongoDB',      level: 80, category: 'Backend',  Icon: SiMongodb,      color: '#47A248' },
  { name: 'Figma',        level: 88, category: 'Design',   Icon: SiFigma,        color: '#F24E1E' },
  { name: 'UI/UX Design', level: 85, category: 'Design',   Icon: MdDesignServices, color: '#0038FF' },
  { name: 'Git & GitHub', level: 90, category: 'Tools',    Icon: SiGithub,       color: '#181717' },
  { name: 'Docker',       level: 70, category: 'Tools',    Icon: SiDocker,       color: '#2496ED' },
];

const categories = ['All', 'Frontend', 'Backend', 'Design', 'Tools'];

function AnimatedGauge({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let current = 0;
          const step = level / 40;
          const timer = setInterval(() => {
            current = Math.min(current + step, level);
            setValue(Math.round(current));
            if (current >= level) clearInterval(timer);
          }, 25);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level, started]);

  return (
    <div ref={ref}>
      <AnimatedCircularProgressBar
        value={value}
        gaugePrimaryColor="#0038FF"
        gaugeSecondaryColor="#E8EEFF"
        className="!size-28 !text-xl !font-black"
      />
    </div>
  );
}

export const SkillsSection = () => {
  const [active, setActive] = React.useState('All');
  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="bg-white w-full py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block bg-[#CCFF00] text-black font-black text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              SKILLS
            </span>
            <h2
              className="text-[clamp(3rem,8vw,96px)] font-black leading-none tracking-tighter text-black uppercase"
              style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
            >
              MY<br />
              <span className="text-[#0038FF]">STACK</span>
            </h2>
          </div>
          <p className="text-black/50 text-sm max-w-xs font-medium leading-relaxed">
            Technologies I use daily to build fast, accessible, and beautiful products from idea to production.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider border-2 transition-all ${
                active === cat
                  ? 'bg-[#0038FF] text-white border-[#0038FF] shadow-lg shadow-[#0038FF]/20'
                  : 'bg-white text-black border-black hover:border-[#0038FF] hover:text-[#0038FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((skill, i) => {
            const { Icon, color } = skill;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="group flex flex-col items-center gap-4 bg-[#F8F9FA] rounded-[1.75rem] p-6 border-2 border-transparent hover:border-[#0038FF] hover:shadow-xl hover:shadow-[#0038FF]/10 transition-all duration-300"
              >
                {/* Gauge + icon layered */}
                <div className="relative flex items-center justify-center">
                  <AnimatedGauge level={skill.level} />
                  {/* Brand icon centred inside ring */}
                  <div className="absolute inset-0 flex items-center justify-center mt-5">
                    <Icon
                      style={{ color }}
                      className="w-8 h-8 drop-shadow-sm"
                    />
                  </div>
                </div>

                {/* Name + badge */}
                <div className="text-center">
                  <p className="font-black text-base text-black leading-tight">{skill.name}</p>
                  <span className="inline-block mt-1.5 text-[9px] font-black uppercase tracking-widest bg-[#CCFF00] text-black px-2.5 py-0.5 rounded-full">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tag row */}
        <div className="mt-16 flex flex-wrap gap-3">
          {['Accessible', 'Responsive', 'Performant', 'Pixel-Perfect', 'Production-Ready'].map(tag => (
            <span
              key={tag}
              className="px-5 py-2 rounded-full border-2 border-black text-xs font-black uppercase tracking-wider hover:bg-black hover:text-white transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
